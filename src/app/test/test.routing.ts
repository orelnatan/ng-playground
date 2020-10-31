import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestRoot } from './components/test-root/test-root.component';
import { Home } from './pages/home/home.page';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: TestRoot, children:
        [
            { path: 'home', component: Home },
      
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
  
export class TestRoutingModule {}