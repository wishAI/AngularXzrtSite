import {Injectable} from "@angular/core";
import {MdDialog, MdDialogRef} from "@angular/material";
import {DialogComponent} from "../components/universal/dialog.component";

@Injectable()
export class DialogService {
    constructor(private dialog: MdDialog) {
    }

    public show(title: string, message: string) {
        let dialogRef: MdDialogRef<DialogComponent> = this.dialog.open(DialogComponent);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
    }
}
