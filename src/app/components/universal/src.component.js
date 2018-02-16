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
var src_service_1 = require("../../services/src.service");
var rxjs_1 = require("rxjs");
var SrcComponent = (function () {
    function SrcComponent(srcService) {
        this.srcService = srcService;
    }
    SrcComponent.prototype.ngOnInit = function () {
        var query = urlToQuery(this.srcUrl);
        switch (this.srcType) {
            case "text": {
                this.srcService.loadText(query).subscribe(this.resolveText.bind(this), this.handleError.bind(this));
            }
        }
    };
    SrcComponent.prototype.handleError = function (err) {
        return rxjs_1.Observable.throw(err);
    };
    SrcComponent.prototype.resolveText = function (text) {
        this.text = text;
    };
    return SrcComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SrcComponent.prototype, "srcType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SrcComponent.prototype, "srcUrl", void 0);
SrcComponent = __decorate([
    core_1.Component({
        selector: "src",
        templateUrl: "../../resource/templates/src.component.html",
        providers: [src_service_1.SrcService]
    }),
    __metadata("design:paramtypes", [src_service_1.SrcService])
], SrcComponent);
exports.SrcComponent = SrcComponent;
//# sourceMappingURL=src.component.js.map