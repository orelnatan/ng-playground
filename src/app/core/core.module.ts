import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from '../app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavBar } from './components/nav-bar/nav-bar.component';

import { PageNotFound } from './pages/page-not-found/page-not-found.page';

@NgModule({
    declarations: [
        PageNotFound,
        NavBar
    ],
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppMaterialModule
    ],
    exports: [
        NavBar
    ]
})
export class CoreModule { }