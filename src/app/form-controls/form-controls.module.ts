import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from 'src/app/app-material.module';

import { Display } from './components/input-autocomplete-multiple/directives/display.directive';

import { Filter } from './components/input-autocomplete-single/pipes/filter.pipe';
import { Name } from './components/input-autocomplete-single/pipes/name.pipe';
import { Highlight } from './pipes/highlight.pipe';
import { FormControl } from './pipes/form-control.pipe';

import { InputText } from './components/input-text/input-text.component';
import { InputDate } from './components/input-date/input-date.component';
import { InputSearch } from './components/input-search/input-search.component';
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
        InputSearch,
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
        Display,
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
        InputSearch,
        InputPassword,
        InputTextarea,
        InputSingleSelect,
        InputMultipleSelect,
        InputAutocompleteSingle,
        InputAutocompleteMultiple,
        InputDate,
    ],
    
   
})
export class FormControlsModule {}