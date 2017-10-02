import {NgModule} from "@angular/core";
import {AppComponent} from "../components/app.component";
import {NavComponent} from "../components/nav.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MdDialogModule, MdButtonModule} from "@angular/material";
import {SlimLoadingBarModule} from "ng2-slim-loading-bar";
import {RouterModule, Routes} from "@angular/router";
import {HomeWrapperComponent} from "../components/home/home-wrapper.component";
import {HomeItemComponent} from "../components/home/home-item.component";
import {HomeFlowComponent} from "../components/home/home-flow.component";
import {FooterComponent} from "../components/footer.component";
import {InfoWrapperComponent} from "../components/info-wrapper.component";
import {JoinWrapperComponent} from "../components/join-wrapper.component";
import {DialogComponent} from "../components/universal/dialog.component";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

const routes: Routes = [
    { path: "", component: HomeWrapperComponent, pathMatch: "full" },
    { path: "info", component: InfoWrapperComponent },
    { path: "join", component: JoinWrapperComponent },
    { path: "menu", loadChildren: "./menu.module#MenuModule"},
    { path: "article", loadChildren: "./content.module#ContentModule"}
];

// { path: "menu", loadChildren: "./menu.module#MenuModule"}


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        HomeWrapperComponent,
        InfoWrapperComponent,
        JoinWrapperComponent,
        HomeItemComponent,
        HomeFlowComponent,
        DialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        MdDialogModule,
        MdButtonModule,
        ReactiveFormsModule,
        SlimLoadingBarModule.forRoot(),
        RouterModule.forRoot(routes)
    ],
    exports: [
        BrowserModule,
        SlimLoadingBarModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    entryComponents: [
        DialogComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
