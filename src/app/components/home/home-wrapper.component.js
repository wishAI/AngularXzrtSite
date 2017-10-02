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
var home_service_1 = require("../../services/home.service");
var HomeWrapperComponent = (function () {
    function HomeWrapperComponent(route, slimBarService, homeService) {
        this.route = route;
        this.slimBarService = slimBarService;
        this.homeService = homeService;
        // template properties
        this.galleryUrl = "assets/images/Gallery.jpg";
        this.slideUrls = ["assets/images/slide1.jpg", "assets/images/slide2.jpg", "assets/images/slide3.jpg"];
        this.slideIdx = 0;
        this.onResized = this.onResized.bind(this);
    }
    HomeWrapperComponent.prototype.ngOnInit = function () {
        this.slimBarService.start();
        this.route.queryParams.subscribe(this.resolveQuery.bind(this));
        this.slimBarService.complete();
    };
    HomeWrapperComponent.prototype.ngOnDestroy = function () {
        // unbind the event
        window.removeEventListener("resize", this.onResized);
        clearInterval(this.slideIntervalKey);
    };
    HomeWrapperComponent.prototype.handleError = function (err) {
        console.log(err);
    };
    HomeWrapperComponent.prototype.resolveQuery = function (query) {
        this.pageQuery = query;
        if (typeof query["lang"] == "undefined") {
            this.pageQuery = { lang: "zh" };
        }
        this.homeService.loadPage(this.pageQuery).subscribe(this.resolvePage.bind(this), this.handleError.bind(this));
    };
    HomeWrapperComponent.prototype.resolvePage = function (res) {
        var homeFlows = res["homeFlowEles"];
        for (var _i = 0, homeFlows_1 = homeFlows; _i < homeFlows_1.length; _i++) {
            var homeFlow = homeFlows_1[_i];
            homeFlow["coverUrl"] = relUrlToBackAbsUrl(homeFlow["coverUrl"]);
        }
        this.raceHomeFlows = homeFlows.slice(0, 4);
        this.techHomeFlows = homeFlows.slice(4, 8);
        this.homeItems = res["homeItemEles"];
        this.startGuiAction();
    };
    HomeWrapperComponent.prototype.startGuiAction = function () {
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
    };
    // events for the html components
    HomeWrapperComponent.prototype.onResized = function (evt) {
        this.adjustFlowNum();
    };
    HomeWrapperComponent.prototype.onFlowInserted = function () {
        if (document.getElementsByClassName('home-flow-component').length == 4) {
            this.adjustFlowNum();
        }
    };
    HomeWrapperComponent.prototype.switchLeftSlides = function () {
        this.switchSlides(-1);
    };
    HomeWrapperComponent.prototype.switchRightSlides = function () {
        this.switchSlides(1);
    };
    // gui functions
    HomeWrapperComponent.prototype.switchSlides = function (val) {
        var len = document.getElementsByClassName("slides").length;
        // make sure the index is in the right range
        if (this.slideIdx + val < 0) {
            this.slideIdx = len - 1;
        }
        else if (this.slideIdx + val > len - 1) {
            this.slideIdx = 0;
        }
        else {
            this.slideIdx += val;
        }
        // refresh the view
        this.showSlides(this.slideIdx);
    };
    HomeWrapperComponent.prototype.showSlides = function (idx) {
        var slides = document.getElementsByClassName("slides");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            if (i == idx) {
                slides[i].style.display = "block";
            }
        }
    };
    HomeWrapperComponent.prototype.adjustFlowNum = function () {
        var width = document.body.clientWidth;
        var num = 0;
        if (width > 1250) {
            num = 4;
        }
        else if (width > 950) {
            num = 3;
        }
        else if (width > 650) {
            num = 2;
        }
        else {
            num = 1;
        }
        var flows = document.getElementsByClassName("homeFlowContainer");
        for (var i = 0; i < flows.length; i++) {
            flows[i].style.display = "none";
            if ((i + 1) % 4 <= num && (i + 1) % 4 > 0) {
                flows[i].style.display = "block";
            }
        }
    };
    return HomeWrapperComponent;
}());
HomeWrapperComponent = __decorate([
    core_1.Component({
        selector: "home-wrapper",
        templateUrl: "../../resource/templates/home-wrapper.component.html",
        styleUrls: ["../../resource/styles/home-wrapper.component.css"],
        providers: [home_service_1.HomeService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        ng2_slim_loading_bar_1.SlimLoadingBarService,
        home_service_1.HomeService])
], HomeWrapperComponent);
exports.HomeWrapperComponent = HomeWrapperComponent;
//# sourceMappingURL=home-wrapper.component.js.map