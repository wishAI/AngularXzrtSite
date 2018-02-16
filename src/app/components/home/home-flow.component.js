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
var HomeFlowComponent = (function () {
    function HomeFlowComponent(self) {
        this.self = self;
    }
    HomeFlowComponent.prototype.ngOnInit = function () {
        // bind the highlight to events
        var ele = this.self.nativeElement.getElementsByClassName("homeFlowContainer")[0];
        ele.addEventListener("mouseover", this.applyHighlight.bind(this));
        ele.addEventListener("mouseout", this.removeHighlight.bind(this));
    };
    HomeFlowComponent.prototype.applyHighlight = function (evt) {
        var image = this.self.nativeElement.getElementsByClassName("homeFlowImage")[0];
        image.classList.add("homeFlowImageHover");
    };
    HomeFlowComponent.prototype.removeHighlight = function (evt) {
        evt.stopPropagation();
        var image = this.self.nativeElement.getElementsByClassName("homeFlowImage")[0];
        image.classList.remove("homeFlowImageHover");
    };
    return HomeFlowComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HomeFlowComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HomeFlowComponent.prototype, "info", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HomeFlowComponent.prototype, "coverUrl", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HomeFlowComponent.prototype, "query", void 0);
HomeFlowComponent = __decorate([
    core_1.Component({
        selector: "home-flow",
        templateUrl: "../../resource/templates/home-flow.component.html",
        styleUrls: ["../../resource/styles/home-flow.component.css"]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], HomeFlowComponent);
exports.HomeFlowComponent = HomeFlowComponent;
//# sourceMappingURL=home-flow.component.js.map