import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MdButtonModule} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {MenuWrapperComponent} from "../components/menu/menu-wrapper.component";
import {MenuFlowComponent} from "../components/menu/menu-flow.component";
import {MenuItemComponent} from "../components/menu/menu-item.component";

const routes: Routes = [
    { path: "", component: MenuWrapperComponent, pathMatch: "full" }
];

@NgModule({
    declarations: [
        MenuWrapperComponent,
        MenuFlowComponent,
        MenuItemComponent
    ],
    imports: [
        CommonModule,
        MdButtonModule,
        RouterModule.forChild(routes)
    ]
})
export class MenuModule {
}
