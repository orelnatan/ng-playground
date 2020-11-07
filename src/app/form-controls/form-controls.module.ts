import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from 'src/app/app-material.module';

import { RequireSelectValidator } from './directives/require-select-validator.directive';

import { Name } from './pipes/name.pipe';
import { Filter } from './pipes/filter.pipe';
import { Highlight } from './pipes/highlight.pipe';
import { FormControl } from './pipes/form-control.pipe';

import { InputText } from './components/input-text/input-text.component';
import { InputDate } from './components/input-date/input-date.component';
import { InputNumber } from './components/input-number/input-number.component';
import { InputPassword } from './components/input-password/input-password.component';
import { InputTextarea } from './components/input-textarea/input-textarea.component';
import { InputSingleSelect } from './components/input-single-select/input-single-select.component';
import { InputMultipleSelect } from './components/input-multiple-select/input-multiple-select.component';
import { InputAutocompleteSingle } from './components/input-autocomplete-single/input-autocomplete-single.component';
import { InputAutocompleteMultiple } from './components/input-autocomplete-multiple/input-autocomplete-multiple.component';

@NgModule({
    declarations: [
        InputText,
        InputNumber,
        InputPassword,
        InputTextarea,
        InputSingleSelect,
        InputMultipleSelect,
        InputAutocompleteSingle,
        InputAutocompleteMultiple,
        InputDate,
        FormControl,
        Highlight,
        Filter,
        Name,
        RequireSelectValidator
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        HttpClientModule,
        AppMaterialModule,
        ReactiveFormsModule.withConfig({ 
            warnOnNgModelWithFormControl: 'never'
        }),
    ], 
    exports: [
        InputText,
        InputNumber,
        InputPassword,
        InputTextarea,
        InputSingleSelect,
        InputMultipleSelect,
        InputAutocompleteSingle,
        InputAutocompleteMultiple,
        InputDate,
        RequireSelectValidator
    ],
    
   
})
export class FormControlsModule {}