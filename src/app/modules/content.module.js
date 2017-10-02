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
var router_1 = require("@angular/router");
var block_image_component_1 = require("../components/content/blocks/block-image.component");
var block_paragraph_component_1 = require("../components/content/blocks/block-paragraph.component");
var src_component_1 = require("../components/universal/src.component");
var content_wrapper_component_1 = require("../components/content/content-wrapper.component");
var routes = [
    { path: "", component: content_wrapper_component_1.ContentWrapperComponent, pathMatch: 'full' }
];
var ContentModule = (function () {
    function ContentModule() {
    }
    return ContentModule;
}());
ContentModule = __decorate([
    core_1.NgModule({
        declarations: [
            content_wrapper_component_1.ContentWrapperComponent,
            block_image_component_1.ImageBlockComponent,
            block_paragraph_component_1.ParagraphBlockComponent,
            src_component_1.SrcComponent
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(routes)
        ]
    })
], ContentModule);
exports.ContentModule = ContentModule;
//# sourceMappingURL=content.module.js.map