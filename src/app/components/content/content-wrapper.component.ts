import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {ContentService} from "../../services/content.service";

declare var timeStampToDateStr: any;
declare var relUrlToBackAbsUrl: any;

@Component({
    selector: "content-wrapper",
    templateUrl: "../../resource/templates/content-wrapper.component.html",
    styleUrls: ["../../resource/styles/content-wrapper.component.css"],
    providers: [ContentService]
})
export class ContentWrapperComponent implements OnInit, OnDestroy{
    // template properties
    public createDate: string;
    public author: string;
    public title: string;
    public blocks: Object[];
    public galleryUrl: string;

    private pageQuery: Object;
    private isScrolling: false;

    constructor(
        private route: ActivatedRoute,
        private slimBarService: SlimLoadingBarService,
        private contentService: ContentService
    ) {
        this.galleryUrl = "assets/images/raceGallery.jpg";
        this.isScrolling = false;

        this.onScroll = this.onScroll.bind(this);
    }


    public ngOnInit(): void {
        this.route.queryParams.subscribe(this.resolveQuery.bind(this));
    }

    public ngOnDestroy(): void {
        window.removeEventListener("scroll", this.onScroll);
        window.removeEventListener("resize", this.onScroll);
    }

    private handleError(err: Object): void {
        console.log(err);
    }

    private resolveQuery(query: Object): void {
        this.slimBarService.start();

        this.pageQuery = query;

        this.contentService.loadPage(query).subscribe(this.resolvePage.bind(this), this.handleError.bind(this));

        this.slimBarService.complete();
    }

    private resolvePage(data: Object): void {
        let info: Object = data["articleInfoEle"];
        this.author = info["author"];
        this.title = info["title"];
        this.createDate = timeStampToDateStr(info["createDate"]);

        // convert imageUrl
        let blocks: Object[] = data["blockEles"];
        for(let block of blocks) {
            switch(block["_type"]) {
                case "image": {
                    block["imageUrl"] = relUrlToBackAbsUrl(block["imageUrl"]);
                }
            }
        }
        this.blocks = blocks;

        this.startGuiAction();
    }

    private startGuiAction(): void {
        window.addEventListener("scroll", this.onScroll);
        window.addEventListener("resize", this.onScroll);
        document.getElementById("btnPrint").addEventListener("click", this.onPrint.bind(this));

        this.onScroll();
    }

    // events
    private onScroll(): void {
        if(!this.isScrolling) {
            const speed: number = 3;
            const footerHeight: number = 150;
            const headGalleryHeight: number = 470;

            let top: number = (window.pageYOffset !== undefined) ? window.pageYOffset : (<Element> (document.documentElement || document.body.parentNode || document.body)).scrollTop;
            let gallery: HTMLElement = <HTMLElement> document.getElementById("headGalleryContainer");
            if(top < headGalleryHeight * speed + 200) {
                let trans: number = - top / speed;
                gallery.style.transform = "translateY(" + trans + "px";
            } else if(gallery.style.transform != "translateY(-500px)") {
                gallery.style.transform = "translateY(-500px)";
            }
        }
    }

    private onPrint(): void {
        window.print();
    }
}
