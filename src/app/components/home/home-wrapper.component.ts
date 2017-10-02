import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {HomeService} from "../../services/home.service";
import {Response} from "@angular/http";

declare var relUrlToBackAbsUrl: any;
declare var Hammer: any;

@Component({
    selector: "home-wrapper",
    templateUrl: "../../resource/templates/home-wrapper.component.html",
    styleUrls: ["../../resource/styles/home-wrapper.component.css"],
    providers: [HomeService]
})
export class HomeWrapperComponent implements OnInit, OnDestroy {
    // template properties
    public galleryUrl: string = "assets/images/Gallery.jpg";
    public slideUrls: string[] = ["assets/images/slide1.jpg", "assets/images/slide2.jpg", "assets/images/slide3.jpg"];
    public raceHomeFlows: Object[];
    public techHomeFlows: Object[];
    public homeItems: Object[];

    private pageQuery: Object;
    private slideIdx: number;
    private slideIntervalKey: number;

    constructor(
        private route: ActivatedRoute,
        private slimBarService: SlimLoadingBarService,
        private homeService: HomeService
    ) {
        this.slideIdx = 0;
        this.onResized = this.onResized.bind(this);
    }

    public ngOnInit(): void {
        this.slimBarService.start();

        this.route.queryParams.subscribe(this.resolveQuery.bind(this));

        this.slimBarService.complete();
    }

    public ngOnDestroy(): void {
        // unbind the event
        window.removeEventListener("resize", this.onResized);
        clearInterval(this.slideIntervalKey);
    }

    private handleError(err: Object): void {
        console.log(err);
    }

    private resolveQuery(query: Object): void {
        this.pageQuery = query;

        if(typeof query["lang"] == "undefined") {
            this.pageQuery = { lang: "zh" };
        }

        this.homeService.loadPage(this.pageQuery).subscribe(this.resolvePage.bind(this), this.handleError.bind(this));
    }

    private resolvePage(res: Response): void {
        let homeFlows: Object[] = <Object[]> res["homeFlowEles"];
        for(let homeFlow of homeFlows) {
            homeFlow["coverUrl"] = relUrlToBackAbsUrl(homeFlow["coverUrl"]);
        }

        this.raceHomeFlows = homeFlows.slice(0, 4);
        this.techHomeFlows = homeFlows.slice(4, 8);
        this.homeItems = res["homeItemEles"];

        this.startGuiAction();
    }

    private startGuiAction(): void {
        // bind the events to the functions
        window.addEventListener("resize", this.onResized);
        document.getElementById("btnSlidePrev").addEventListener("click", this.switchLeftSlides.bind(this));
        document.getElementById("btnSlideNext").addEventListener("click", this.switchRightSlides.bind(this));
        Hammer(document.getElementById("headerGalleryWrapper")).on("swipeleft", this.switchRightSlides.bind(this));
        Hammer(document.getElementById("headerGalleryWrapper")).on("swiperight", this.switchLeftSlides.bind(this));
        document.getElementsByClassName("homeFlowList")[1].addEventListener("DOMNodeInserted", this.onFlowInserted.bind(this));

        // setup the gui
        this.adjustFlowNum();
        this.showSlides(this.slideIdx);
        this.slideIntervalKey = setInterval(this.switchRightSlides.bind(this), 8000);
    }

    // events for the html components
    private onResized(evt: UIEvent) {
        this.adjustFlowNum();
    }

    private onFlowInserted(): void {
        if(document.getElementsByClassName('home-flow-component').length == 4) {
            this.adjustFlowNum();
        }
    }

    private switchLeftSlides(): void {
        this.switchSlides(-1);
    }

    private switchRightSlides(): void {
        this.switchSlides(1);
    }

    // gui functions
    private switchSlides(val: number): void {
        let len: number = document.getElementsByClassName("slides").length;

        // make sure the index is in the right range
        if(this.slideIdx + val < 0) {
            this.slideIdx = len - 1;
        } else if (this.slideIdx + val > len - 1) {
            this.slideIdx = 0;
        } else {
            this.slideIdx += val;
        }

        // refresh the view
        this.showSlides(this.slideIdx);
    }

    private showSlides(idx: number): void {
        let slides: HTMLCollectionOf<Element> = document.getElementsByClassName("slides");

        for(let i: number = 0; i < slides.length; i ++) {
            (<HTMLElement> slides[i]).style.display = "none";
            if(i == idx) {
                (<HTMLElement> slides[i]).style.display = "block";
            }
        }
    }

    private adjustFlowNum(): void {
        let width: number = document.body.clientWidth;

        let num: number = 0;
        if(width > 1250) {
            num = 4;
        } else if(width > 950) {
            num = 3;
        } else if(width > 650) {
            num = 2;
        } else {
            num = 1;
        }

        let flows: HTMLCollectionOf<Element> = document.getElementsByClassName("homeFlowContainer");
        for(let i: number = 0; i < flows.length; i ++) {
            (<HTMLElement> flows[i]).style.display = "none";
            if((i + 1) % 4 <= num && (i + 1) % 4 > 0) {
                (<HTMLElement> flows[i]).style.display = "block";
            }
        }
    }


}
