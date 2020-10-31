import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from '../app-material.module';
import { FormControlsModule } from '../form-controls/form-controls.module';

import { Loader } from './modals/loader/loader.modal';
import { Ipsum } from './modals/ipsum/ipsum.modal';

import { Spinner } from './components/spinner/spinner.component';
import { Modal } from './components/modal/modal.component';

@NgModule({
    declarations: [
       Spinner,
       Modal,
       Loader,
       Ipsum
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppMaterialModule,
        FormControlsModule,
    ],
    exports: [
        Spinner,
        Modal,
        Loader,
        Ipsum
    ],
    entryComponents: [
        Loader,
        Ipsum
    ]
})
export class SharedModule {}