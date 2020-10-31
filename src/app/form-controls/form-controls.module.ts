import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from 'src/app/app-material.module';

import { FormControl } from './pipes/form-control.pipe';

import { InputText } from './components/input-text/input-text.component';
import { InputNumber } from './components/input-number/input-number.component';
import { InputPassword } from './components/input-password/input-password.component';
import { InputTextarea } from './components/input-textarea/input-textarea.component';
import { InputSingleSelect } from './components/input-single-select/input-single-select.component';
import { InputMultipleSelect } from './components/input-multiple-select/input-multiple-select.component';
import { InputDate } from './components/input-date/input-date.component';
import { PrimaryBtn } from './components/primary-btn/primary-btn.component';

@NgModule({
    declarations: [
        InputText,
        InputNumber,
        InputPassword,
        InputTextarea,
        InputSingleSelect,
        InputMultipleSelect,
        InputDate,
        PrimaryBtn,
        FormControl
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
        InputDate,
        PrimaryBtn,
    ],
    
   
})
export class FormControlsModule {}