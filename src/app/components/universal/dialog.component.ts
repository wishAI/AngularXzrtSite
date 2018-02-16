import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";

@Component({
    selector: "md-dialog",
    templateUrl: "../../resource/templates/dialog.component.html"
})
export class DialogComponent {
    public title: string;
    public message: string;

    constructor(public dialogRef: MdDialogRef<DialogComponent>) {
    }
}
