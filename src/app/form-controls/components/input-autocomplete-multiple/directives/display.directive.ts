import { Directive, ElementRef, AfterViewChecked, HostListener, OnChanges, Input } from '@angular/core';

@Directive({
    selector: '[display]',
})
export class Display implements OnChanges {
    @Input() key: string;
    @Input() name: string;

    constructor(
        private element: ElementRef
    ) {}

    ngOnChanges(): void {
        if(this.key == null) return;

        if(this.name.toLowerCase().includes(this.key.toLowerCase())) {
            this.element.nativeElement.style.display = "block";
        } else {
            this.element.nativeElement.style.display = "none";
        }
    }

   

}