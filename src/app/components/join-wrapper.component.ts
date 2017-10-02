import {Component, OnInit} from "@angular/core";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {DialogService} from "../services/dialog.service";
import {JoinService} from "../services/join.service";

@Component({
    selector: "join-wrapper",
    templateUrl: "../resource/templates/join-wrapper.component.html",
    styleUrls: ["../resource/styles/join-wrapper.component.css"],
    providers: [JoinService, DialogService]
})
export class JoinWrapperComponent implements OnInit {
    public lang: string;

    constructor(
        private slimBarService: SlimLoadingBarService,
        private dialogService: DialogService,
        private joinService: JoinService
    ) {
        this.lang = "zh";
    }

    public ngOnInit(): void {
        this.slimBarService.start();

        this.startGuiAction();

        this.slimBarService.complete();
    }

    private startGuiAction(): void {
        let eles: NodeListOf<Element> = document.querySelectorAll('input[type="radio"]');
        for(let i: number = 0; i < eles.length; i ++) {
            eles[i].addEventListener("change", this.adjustRadio.bind(this));
        }
    }

    // events
    public onSubmit(val: Object): void {
        for(let key in val) {
            if (val[key].length < 1) {
                this.showMsg("请填写完所有信息再提交。");
                return;
            }
        }

        this.joinService.storeForm(JSON.stringify(val)).subscribe(this.onSucceed.bind(this), this.onFailed.bind(this));
    }

    private onSucceed(res: Object): void {
        this.showMsg("提交成功");
        console.log(res);
    }

    private onFailed(err: Object): void {
        this.showMsg("提交失败，请检查网络。");
        console.log(err);
    }

    // gui functions
    private adjustRadio(evt: Event): void {
        let ele: Element = evt.srcElement;
        let name: string = ele.getAttribute("name");

        let radios: NodeListOf<Element> = document.querySelectorAll('input[type="radio"][name="' + name + '"]');
        for(let i: number = 0; i < radios.length; i ++) {
            // get the label of the input
            let label: Element = document.querySelector('label[for="' + radios[i].id  + '"]');

            if(ele.id != radios[i].id) {
                label.classList.remove("radioChecked");
            } else {
                label.classList.add("radioChecked");
            }
        }
    }

    private showMsg(msg: string) {
        this.dialogService.show(msg, msg);
    }
}
