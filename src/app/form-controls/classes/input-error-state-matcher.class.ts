import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

/** Error when control is invalid, and the form is submitted. */
export class InputErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const submitted: boolean = form && form.submitted;
        const invalid: boolean = control && control.invalid

        return invalid && submitted;
    }
}