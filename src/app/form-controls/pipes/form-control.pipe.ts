import { Pipe, PipeTransform } from '@angular/core';
import { FormControl as Control } from '@angular/forms';

@Pipe({
   name: 'formControl',
})
export class FormControl implements PipeTransform {
    transform(control: Control): Control {
        return control || new Control();
    }
}