import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from 'src/app/app-material.module';

import { FormControl } from './pipes/form-control.pipe';
import { RequireMatchValidator } from './directives/require-match-validator.directive';

import { InputText } from './components/input-text/input-text.component';
import { InputNumber } from './components/input-number/input-number.component';
import { InputPassword } from './components/input-password/input-password.component';
import { InputTextarea } from './components/input-textarea/input-textarea.component';
import { InputSingleSelect } from './components/input-single-select/input-single-select.component';
import { InputMultipleSelect } from './components/input-multiple-select/input-multiple-select.component';
import { InputAutocompleteSingle } from './components/input-autocomplete-single/input-autocomplete-single.component';
import { InputDate } from './components/input-date/input-date.component';

@NgModule({
    declarations: [
        InputText,
        InputNumber,
        InputPassword,
        InputTextarea,
        InputSingleSelect,
        InputMultipleSelect,
        InputAutocompleteSingle,
        InputDate,
        FormControl,
        RequireMatchValidator
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
        InputDate,
        RequireMatchValidator
    ],
    
   
})
export class FormControlsModule {}