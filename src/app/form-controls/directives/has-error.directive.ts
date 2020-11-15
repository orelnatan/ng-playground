import { Directive, ElementRef, AfterViewChecked, HostListener, Input } from '@angular/core';
import { ControlContainer, FormControl, NgForm, NgModel } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

@Directive({
    selector: '[hasError]',
})
export class HasError implements AfterViewChecked {
    @Input() control: FormControl;
    @Input() stateMatcher: ErrorStateMatcher;

    constructor(
        private element: ElementRef,
        private _controlContainer: ControlContainer
    ) {}

    ngAfterViewChecked(): void {
    //    const control: FormControl = this.formControl || new FormControl()
   
        console.log(this.stateMatcher.isErrorState(this.control, <NgForm>this._controlContainer));

      //  console.log(<NgForm>this._controlContainer);
    }

   

}


/*  usage on template...
    <div hasError [stateMatcher]="matcher" [control]="control">

    </div>
*/
