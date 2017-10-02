import {Component, Input} from "@angular/core";

@Component({
    selector: "menu-item",
    templateUrl: "../../resource/templates/menu-item.component.html",
    styleUrls: ["../../resource/styles/menu-item.component.css"]
})
export class MenuItemComponent {
    @Input() public title: string;
    @Input() public createDate: string;
    @Input() public query: Object;
}
