import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from '../app-material.module';
import { SharedModule } from '../shared/shared.module';
import { TestRoutingModule } from './test.routing';
import { FormControlsModule } from '../form-controls/form-controls.module';

import { TestRoot } from './components/test-root/test-root.component';
import { Home } from './pages/home/home.page';

@NgModule({
    declarations: [
       TestRoot,
       Home
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppMaterialModule,
        FormControlsModule,
        SharedModule,
        TestRoutingModule
    ],
    providers: [
        
    ]
})
export class TestModule {}