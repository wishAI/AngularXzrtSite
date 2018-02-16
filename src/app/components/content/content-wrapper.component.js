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
var router_1 = require("@angular/router");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var content_service_1 = require("../../services/content.service");
var ContentWrapperComponent = (function () {
    function ContentWrapperComponent(route, slimBarService, contentService) {
        this.route = route;
        this.slimBarService = slimBarService;
        this.contentService = contentService;
        this.galleryUrl = "assets/images/raceGallery.jpg";
        this.isScrolling = false;
        this.onScroll = this.onScroll.bind(this);
    }
    ContentWrapperComponent.prototype.ngOnInit = function () {
        this.route.queryParams.subscribe(this.resolveQuery.bind(this));
    };
    ContentWrapperComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.onScroll);
        window.removeEventListener("resize", this.onScroll);
    };
    ContentWrapperComponent.prototype.handleError = function (err) {
        console.log(err);
    };
    ContentWrapperComponent.prototype.resolveQuery = function (query) {
        this.slimBarService.start();
        this.pageQuery = query;
        this.contentService.loadPage(query).subscribe(this.resolvePage.bind(this), this.handleError.bind(this));
        this.slimBarService.complete();
    };
    ContentWrapperComponent.prototype.resolvePage = function (data) {
        var info = data["articleInfoEle"];
        this.author = info["author"];
        this.title = info["title"];
        this.createDate = timeStampToDateStr(info["createDate"]);
        // convert imageUrl
        var blocks = data["blockEles"];
        for (var _i = 0, blocks_1 = blocks; _i < blocks_1.length; _i++) {
            var block = blocks_1[_i];
            switch (block["_type"]) {
                case "image": {
                    block["imageUrl"] = relUrlToBackAbsUrl(block["imageUrl"]);
                }
            }
        }
        this.blocks = blocks;
        this.startGuiAction();
    };
    ContentWrapperComponent.prototype.startGuiAction = function () {
        window.addEventListener("scroll", this.onScroll);
        window.addEventListener("resize", this.onScroll);
        document.getElementById("btnPrint").addEventListener("click", this.onPrint.bind(this));
        this.onScroll();
    };
    // events
    ContentWrapperComponent.prototype.onScroll = function () {
        if (!this.isScrolling) {
            var speed = 3;
            var footerHeight = 150;
            var headGalleryHeight = 470;
            var top_1 = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            var gallery = document.getElementById("headGalleryContainer");
            if (top_1 < headGalleryHeight * speed + 200) {
                var trans = -top_1 / speed;
                gallery.style.transform = "translateY(" + trans + "px";
            }
            else if (gallery.style.transform != "translateY(-500px)") {
                gallery.style.transform = "translateY(-500px)";
            }
        }
    };
    ContentWrapperComponent.prototype.onPrint = function () {
        window.print();
    };
    return ContentWrapperComponent;
}());
ContentWrapperComponent = __decorate([
    core_1.Component({
        selector: "content-wrapper",
        templateUrl: "../../resource/templates/content-wrapper.component.html",
        styleUrls: ["../../resource/styles/content-wrapper.component.css"],
        providers: [content_service_1.ContentService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        ng2_slim_loading_bar_1.SlimLoadingBarService,
        content_service_1.ContentService])
], ContentWrapperComponent);
exports.ContentWrapperComponent = ContentWrapperComponent;
//# sourceMappingURL=content-wrapper.component.js.map