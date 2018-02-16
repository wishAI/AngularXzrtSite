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
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var dialog_service_1 = require("../services/dialog.service");
var join_service_1 = require("../services/join.service");
var JoinWrapperComponent = (function () {
    function JoinWrapperComponent(slimBarService, dialogService, joinService) {
        this.slimBarService = slimBarService;
        this.dialogService = dialogService;
        this.joinService = joinService;
        this.lang = "zh";
    }
    JoinWrapperComponent.prototype.ngOnInit = function () {
        this.slimBarService.start();
        this.startGuiAction();
        this.slimBarService.complete();
    };
    JoinWrapperComponent.prototype.startGuiAction = function () {
        var eles = document.querySelectorAll('input[type="radio"]');
        for (var i = 0; i < eles.length; i++) {
            eles[i].addEventListener("change", this.adjustRadio.bind(this));
        }
    };
    // events
    JoinWrapperComponent.prototype.onSubmit = function (val) {
        for (var key in val) {
            if (val[key].length < 1) {
                this.showMsg("请填写完所有信息再提交。");
                return;
            }
        }
        this.joinService.storeForm(JSON.stringify(val)).subscribe(this.onSucceed.bind(this), this.onFailed.bind(this));
    };
    JoinWrapperComponent.prototype.onSucceed = function (res) {
        this.showMsg("提交成功");
        console.log(res);
    };
    JoinWrapperComponent.prototype.onFailed = function (err) {
        this.showMsg("提交失败，请检查网络。");
        console.log(err);
    };
    // gui functions
    JoinWrapperComponent.prototype.adjustRadio = function (evt) {
        var ele = evt.srcElement;
        var name = ele.getAttribute("name");
        var radios = document.querySelectorAll('input[type="radio"][name="' + name + '"]');
        for (var i = 0; i < radios.length; i++) {
            // get the label of the input
            var label = document.querySelector('label[for="' + radios[i].id + '"]');
            if (ele.id != radios[i].id) {
                label.classList.remove("radioChecked");
            }
            else {
                label.classList.add("radioChecked");
            }
        }
    };
    JoinWrapperComponent.prototype.showMsg = function (msg) {
        this.dialogService.show(msg, msg);
    };
    return JoinWrapperComponent;
}());
JoinWrapperComponent = __decorate([
    core_1.Component({
        selector: "join-wrapper",
        templateUrl: "../resource/templates/join-wrapper.component.html",
        styleUrls: ["../resource/styles/join-wrapper.component.css"],
        providers: [join_service_1.JoinService, dialog_service_1.DialogService]
    }),
    __metadata("design:paramtypes", [ng2_slim_loading_bar_1.SlimLoadingBarService,
        dialog_service_1.DialogService,
        join_service_1.JoinService])
], JoinWrapperComponent);
exports.JoinWrapperComponent = JoinWrapperComponent;
//# sourceMappingURL=join-wrapper.component.js.map