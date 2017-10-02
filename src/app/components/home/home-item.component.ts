import {Component, Input} from "@angular/core";

@Component({
    selector: "home-item",
    templateUrl: "../../resource/templates/home-item.component.html",
    styleUrls: ["../../resource/styles/home-item.component.css"]
})
export class HomeItemComponent {
    @Input() public title: string;
    @Input() public query: Object;

    constructor() {
    }
}
