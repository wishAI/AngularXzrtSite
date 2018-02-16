import {Component, OnInit} from "@angular/core";
import {MenuService} from "../../services/menu.service";
import {ActivatedRoute} from "@angular/router";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {Response} from "@angular/http";

declare var relUrlToBackAbsUrl: any;
declare var timeStampToDateStr: any;

@Component({
    selector: "menu-wrapper",
    templateUrl: "../../resource/templates/menu-wrapper.component.html",
    styleUrls: ["../../resource/styles/menu-wrapper.component.css"],
    providers: [MenuService]
})
export class MenuWrapperComponent implements OnInit {
    // template properties
    public menuFlows: Object[];
    public menuItems: Object[];

    private pageQuery: Object;
    private listPageNum: number;

    constructor(
        private route: ActivatedRoute,
        private slimBarService: SlimLoadingBarService,
        private menuService: MenuService
    ) {
        this.listPageNum = 1;
    }

    private handleError(err: Object): void {
        console.log(err);
    }

    public ngOnInit(): void {
        this.route.queryParams.subscribe(this.resolveQuery.bind(this));
    }

    private resolveQuery(query: Object): void {
        this.slimBarService.start();

        this.pageQuery = query;

        this.menuService.loadPage(query).subscribe(this.resolvePage.bind(this), this.handleError.bind(this));

        this.slimBarService.complete();
    }

    private requestList(): void {
        let query: Object = JSON.parse(JSON.stringify(this.pageQuery));
        query["pageNum"] = this.listPageNum;

        this.menuService.loadList(query).subscribe(this.resolveList.bind(this), this.handleError.bind(this));
    }

    private resolvePage(res: Response): void {
        let flows: Object[] = <Object[]> res["menuFlowEles"];

        // convert urls and timestamp
        for(let flow of flows) {
            flow["coverUrl"] = relUrlToBackAbsUrl(flow["coverUrl"]);
            flow["createDate"] = timeStampToDateStr(flow["createDate"]);
        }

        this.menuFlows = flows;

        this.startGuiAction();
    }

    private resolveList(items: Object[]): void {
        // convert timestamp
        for(let item of items) {
            item["createDate"] = timeStampToDateStr(item["createDate"]);
        }

        this.menuItems = items;
    }

    private startGuiAction(): void {
        window.onresize = this.onResize.bind(this);
        document.getElementById("btnPrev").addEventListener("click", this.switchListLeft.bind(this));
        document.getElementById("btnNext").addEventListener("click", this.switchListRight.bind(this));

        this.setupItems();
        this.adjustFlowNum();
    }

    // events
    private onResize(): void {
        this.adjustFlowNum();
    }

    private switchListLeft(): void {
        if(this.listPageNum > 1) {
            this.listPageNum --;
            this.requestList();
        }
    }

    private switchListRight(): void {
        if(document.getElementsByClassName("option").length == 10) {
            this.listPageNum ++;
            this.requestList();
        }
    }

    // gui functions
    private setupItems(): void {
        let isWhite: boolean = false;
        let items: HTMLCollectionOf<Element> = document.getElementsByClassName("option");
        for(let i: number = 0; i < items.length; i ++) {
            if(isWhite) {
                items[i].classList.add("optionWhite");
                isWhite = !isWhite;
            }
        }
    }

    private adjustFlowNum(): void {
        let width: number = document.body.clientWidth;

        let num: number = 0;
        if(width > 1100) {
            num = 3;
        } else if(width > 700) {
            num = 2;
        } else {
            num = 1;
        }

        let flows: HTMLCollectionOf<Element> = document.getElementsByClassName("optionFlow");
        for(let i: number = 0; i < flows.length; i ++) {
            if(i <= num) {
                (<HTMLElement> flows[i]).style.display = "block";
            } else {
                (<HTMLElement> flows[i]).style.display = "none";
            }
        }
    }
}
