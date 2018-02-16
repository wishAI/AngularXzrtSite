import {Component, Input} from "@angular/core";

@Component({
    selector: "block-paragraph",
    templateUrl: "../../../resource/templates/block-paragraph.component.html",
    styleUrls: ["../../../resource/styles/block-paragraph.component.css"]
})
export class ParagraphBlockComponent {
    @Input() textUrl: string;

    constructor() {
    }
}
