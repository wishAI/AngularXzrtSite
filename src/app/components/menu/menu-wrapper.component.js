"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var menu_service_1 = require("../../services/menu.service");
var router_1 = require("@angular/router");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var MenuWrapperComponent = (function () {
    function MenuWrapperComponent(route, slimBarService, menuService) {
        this.route = route;
        this.slimBarService = slimBarService;
        this.menuService = menuService;
        this.listPageNum = 1;
    }
    MenuWrapperComponent.prototype.handleError = function (err) {
        console.log(err);
    };
    MenuWrapperComponent.prototype.ngOnInit = function () {
        this.route.queryParams.subscribe(this.resolveQuery.bind(this));
    };
    MenuWrapperComponent.prototype.resolveQuery = function (query) {
        this.slimBarService.start();
        this.pageQuery = query;
        this.menuService.loadPage(query).subscribe(this.resolvePage.bind(this), this.handleError.bind(this));
        this.slimBarService.complete();
    };
    MenuWrapperComponent.prototype.requestList = function () {
        var query = JSON.parse(JSON.stringify(this.pageQuery));
        query["pageNum"] = this.listPageNum;
        this.menuService.loadList(query).subscribe(this.resolveList.bind(this), this.handleError.bind(this));
    };
    MenuWrapperComponent.prototype.resolvePage = function (res) {
        var flows = res["menuFlowEles"];
        // convert urls and timestamp
        for (var _i = 0, flows_1 = flows; _i < flows_1.length; _i++) {
            var flow = flows_1[_i];
            flow["coverUrl"] = relUrlToBackAbsUrl(flow["coverUrl"]);
            flow["createDate"] = timeStampToDateStr(flow["createDate"]);
        }
        this.menuFlows = flows;
        this.startGuiAction();
    };
    MenuWrapperComponent.prototype.resolveList = function (items) {
        // convert timestamp
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            item["createDate"] = timeStampToDateStr(item["createDate"]);
        }
        this.menuItems = items;
    };
    MenuWrapperComponent.prototype.startGuiAction = function () {
        window.onresize = this.onResize.bind(this);
        document.getElementById("btnPrev").addEventListener("click", this.switchListLeft.bind(this));
        document.getElementById("btnNext").addEventListener("click", this.switchListRight.bind(this));
        this.setupItems();
        this.adjustFlowNum();
    };
    // events
    MenuWrapperComponent.prototype.onResize = function () {
        this.adjustFlowNum();
    };
    MenuWrapperComponent.prototype.switchListLeft = function () {
        if (this.listPageNum > 1) {
            this.listPageNum--;
            this.requestList();
        }
    };
    MenuWrapperComponent.prototype.switchListRight = function () {
        if (document.getElementsByClassName("option").length == 10) {
            this.listPageNum++;
            this.requestList();
        }
    };
    // gui functions
    MenuWrapperComponent.prototype.setupItems = function () {
        var isWhite = false;
        var items = document.getElementsByClassName("option");
        for (var i = 0; i < items.length; i++) {
            if (isWhite) {
                items[i].classList.add("optionWhite");
                isWhite = !isWhite;
            }
        }
    };
    MenuWrapperComponent.prototype.adjustFlowNum = function () {
        var width = document.body.clientWidth;
        var num = 0;
        if (width > 1100) {
            num = 3;
        }
        else if (width > 700) {
            num = 2;
        }
        else {
            num = 1;
        }
        var flows = document.getElementsByClassName("optionFlow");
        for (var i = 0; i < flows.length; i++) {
            if (i <= num) {
                flows[i].style.display = "block";
            }
            else {
                flows[i].style.display = "none";
            }
        }
    };
    return MenuWrapperComponent;
}());
MenuWrapperComponent = __decorate([
    core_1.Component({
        selector: "menu-wrapper",
        templateUrl: "../../resource/templates/menu-wrapper.component.html",
        styleUrls: ["../../resource/styles/menu-wrapper.component.css"],
        providers: [menu_service_1.MenuService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        ng2_slim_loading_bar_1.SlimLoadingBarService,
        menu_service_1.MenuService])
], MenuWrapperComponent);
exports.MenuWrapperComponent = MenuWrapperComponent;
//# sourceMappingURL=menu-wrapper.component.js.map