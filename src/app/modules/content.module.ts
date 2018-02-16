import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ImageBlockComponent} from "../components/content/blocks/block-image.component";
import {ParagraphBlockComponent} from "../components/content/blocks/block-paragraph.component";
import {SrcComponent} from "../components/universal/src.component";
import {ContentWrapperComponent} from "../components/content/content-wrapper.component";

const routes: Routes = [
    { path: "", component: ContentWrapperComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        ContentWrapperComponent,
        ImageBlockComponent,
        ParagraphBlockComponent,
        SrcComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class ContentModule {

}
