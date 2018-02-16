
import {Component, Input} from "@angular/core";

@Component({
    selector: "menu-flow",
    templateUrl: "../../resource/templates/menu-flow.component.html",
    styleUrls: ["../../resource/styles/menu-flow.component.css"]
})
export class MenuFlowComponent {
    @Input() public title: string;
    @Input() public createDate: string;
    @Input() public coverUrl: string;
    @Input() public query: Object;

    constructor() {
    }
}
