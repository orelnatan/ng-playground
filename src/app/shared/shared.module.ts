import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from '../app-material.module';
import { FormControlsModule } from '../form-controls/form-controls.module';

import { RequireSelectValidator } from './directives/require-select-validator.directive';
import { Collection } from './directives/collection-validator.directive';

import { Loader } from './modals/loader/loader.modal';
import { Ipsum } from './modals/ipsum/ipsum.modal';

import { Spinner } from './components/spinner/spinner.component';
import { Modal } from './components/modal/modal.component';

@NgModule({
    declarations: [
       Spinner,
       Modal,
       Loader,
       Ipsum,
       Collection,
       RequireSelectValidator
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
        Ipsum,
        Collection,
        RequireSelectValidator
    ],
    entryComponents: [
        Loader,
        Ipsum
    ]
})
export class SharedModule {}