import { Directive, Input, } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors, } from '@angular/forms';

@Directive({
    selector: '[collection][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: Collection, multi: true }
    ]
})

export class Collection implements Validator { 
    @Input() min: number = 0;
    @Input() max: number = Infinity;
    
    constructor(){}

    validate(control: FormControl): ValidationErrors | null {
        if(!control.value || !control.value.length) return null;
      
        return (control.value.length < this.min || control.value.length > this.max) ? {
            collection: {
                valid: false,
            },
        } : null;
    }
}