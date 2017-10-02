"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var menu_wrapper_component_1 = require("../components/menu/menu-wrapper.component");
var menu_flow_component_1 = require("../components/menu/menu-flow.component");
var menu_item_component_1 = require("../components/menu/menu-item.component");
var routes = [
    { path: "", component: menu_wrapper_component_1.MenuWrapperComponent, pathMatch: "full" }
];
var MenuModule = (function () {
    function MenuModule() {
    }
    return MenuModule;
}());
MenuModule = __decorate([
    core_1.NgModule({
        declarations: [
            menu_wrapper_component_1.MenuWrapperComponent,
            menu_flow_component_1.MenuFlowComponent,
            menu_item_component_1.MenuItemComponent
        ],
        imports: [
            common_1.CommonModule,
            material_1.MdButtonModule,
            router_1.RouterModule.forChild(routes)
        ]
    })
], MenuModule);
exports.MenuModule = MenuModule;
//# sourceMappingURL=menu.module.js.map