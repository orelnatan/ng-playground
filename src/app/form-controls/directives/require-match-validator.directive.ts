import { Directive, } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors, } from '@angular/forms';

@Directive({
    selector: '[requireMatch][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: RequireMatchValidator, multi: true }
    ]
})

export class RequireMatchValidator implements Validator {
    constructor(){}

    validate(control: FormControl): ValidationErrors | null {
        if(!control.value) return null;
        
        return typeof control.value === "string" ? {
            requireMatch: {
                valid: false,
            },
        } : null;
    }
}