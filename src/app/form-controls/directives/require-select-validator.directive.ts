import { Directive, EventEmitter, Output, } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors, } from '@angular/forms';

@Directive({
    selector: '[requireSelect][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: RequireSelectValidator, multi: true }
    ]
})

export class RequireSelectValidator implements Validator {    
    constructor(){}

    validate(control: FormControl): ValidationErrors | null {
        if(!control.value) return null;
        
        return typeof control.value === "string" ? {
            requireSelect: {
                valid: false,
            },
        } : null;
    }
}