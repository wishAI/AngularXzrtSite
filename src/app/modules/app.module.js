"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_component_1 = require("../components/app.component");
var nav_component_1 = require("../components/nav.component");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var router_1 = require("@angular/router");
var home_wrapper_component_1 = require("../components/home/home-wrapper.component");
var home_item_component_1 = require("../components/home/home-item.component");
var home_flow_component_1 = require("../components/home/home-flow.component");
var footer_component_1 = require("../components/footer.component");
var info_wrapper_component_1 = require("../components/info-wrapper.component");
var join_wrapper_component_1 = require("../components/join-wrapper.component");
var dialog_component_1 = require("../components/universal/dialog.component");
var common_1 = require("@angular/common");
var routes = [
    { path: "", component: home_wrapper_component_1.HomeWrapperComponent, pathMatch: "full" },
    { path: "info", component: info_wrapper_component_1.InfoWrapperComponent },
    { path: "join", component: join_wrapper_component_1.JoinWrapperComponent },
    { path: "menu", loadChildren: "./menu.module#MenuModule" },
    { path: "article", loadChildren: "./content.module#ContentModule" }
];
// { path: "menu", loadChildren: "./menu.module#MenuModule"}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            nav_component_1.NavComponent,
            footer_component_1.FooterComponent,
            home_wrapper_component_1.HomeWrapperComponent,
            info_wrapper_component_1.InfoWrapperComponent,
            join_wrapper_component_1.JoinWrapperComponent,
            home_item_component_1.HomeItemComponent,
            home_flow_component_1.HomeFlowComponent,
            dialog_component_1.DialogComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            material_1.MdDialogModule,
            material_1.MdButtonModule,
            forms_1.ReactiveFormsModule,
            ng2_slim_loading_bar_1.SlimLoadingBarModule.forRoot(),
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [
            platform_browser_1.BrowserModule,
            ng2_slim_loading_bar_1.SlimLoadingBarModule
        ],
        providers: [
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
        ],
        entryComponents: [
            dialog_component_1.DialogComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map