import {Component, Input} from "@angular/core";

@Component({
    selector: "block-image",
    templateUrl: "../../../resource/templates/block-image.component.html",
    styleUrls: ["../../../resource/styles/block-image.component.css"]
})
export class ImageBlockComponent {
    @Input() imageUrl: string;
    @Input() info: string;

    constructor() {
    }
}
