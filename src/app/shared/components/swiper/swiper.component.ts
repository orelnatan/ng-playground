import { Component, Input, OnInit, AfterViewInit, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})

export class Swiper {
    @Input() sliders: Array<number> = [1,1,1,1,1,1,1,1,1,1,1,1,1];
    @Input() xAxisIndex: number = 0;
    @Input() disableNext: boolean;
    @Input() disablePrev: boolean;
 
    xAxisStartPosition: number = 50;
    sliderWidth: number = 175;  
    margin: number = 20;

    startAutoSlide(): void {
        console.log("startAutoSlide");
    }

    stopAutoSlide(): void {
        console.log("stopAutoSlide");
    }

    public slideNext(): void {
        if(this.preventNext()) return;

        this.xAxisIndex += 1;
    }

    public slidePrev(): void {
        if(this.preventPrev()) return;

        this.xAxisIndex -= 1;
    }

    public slideToLast(): void {
        const target: number = this.sliders.length;

        for (let index = this.xAxisIndex; index < target; index ++) {
            this.slideNext();
        }
    }

    public slideToFirst(): void {
        const target: number = 0;

        for (let index = this.xAxisIndex; index > target; index --) {
            this.slidePrev();
        }
    }

    public slideById(id: number): void {
        
    }

    public slideByIndex(index: number): void {
        const target: number = index;
    
        if(this.xAxisIndex < target) {
            for (let index = this.xAxisIndex; index < target; index ++) {
                this.slideNext();
            }
        }

        if(this.xAxisIndex > target) {
            for (let index = this.xAxisIndex; index > target; index --) {
                this.slidePrev();
            }
        }
    }

    public preventNext(): boolean {
        const target: number = this.sliders.length;

        return (this.xAxisIndex + 1) == target || !target || this.disableNext;
    }

    public preventPrev(): boolean {
        const target: number = this.xAxisIndex;

        return !target || this.disablePrev;
    }

    
}
