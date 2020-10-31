import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFound } from './core/pages/page-not-found/page-not-found.page';

const routes: Routes = [
    { path: '', redirectTo: 'test', pathMatch: 'full' },
    { path: 'test', loadChildren: () => import('./test/test.module').then(test => test.TestModule) },

    { path: '**', component: PageNotFound },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
