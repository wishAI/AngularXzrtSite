import {Component, Input, OnInit, ElementRef} from "@angular/core";

@Component({
    selector: "home-flow",
    templateUrl: "../../resource/templates/home-flow.component.html",
    styleUrls: ["../../resource/styles/home-flow.component.css"]
})
export class HomeFlowComponent implements OnInit{
    @Input() public title: string;
    @Input() public info: string;
    @Input() public coverUrl: string;
    @Input() public query: Object;

    constructor(
        private self: ElementRef
    ) {
    }

    ngOnInit(): void {
        // bind the highlight to events
        let ele: Element = this.self.nativeElement.getElementsByClassName("homeFlowContainer")[0];
        ele.addEventListener("mouseover", this.applyHighlight.bind(this));
        ele.addEventListener("mouseout", this.removeHighlight.bind(this))
    }

    private applyHighlight(evt: Event): void {
        let image: Element = this.self.nativeElement.getElementsByClassName("homeFlowImage")[0];
        image.classList.add("homeFlowImageHover");
    }

    private removeHighlight(evt: Event): void {
        evt.stopPropagation();
        let image: Element = this.self.nativeElement.getElementsByClassName("homeFlowImage")[0];
        image.classList.remove("homeFlowImageHover");
    }
}
