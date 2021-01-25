import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// components
import { SidenavComponent } from './components/sidenav/sidenav.component';



@NgModule({
    declarations: [
        // components
        SidenavComponent,
    ],
    exports: [
        // components
        SidenavComponent,
    ],
    imports: [
        // modules (angular)
        CommonModule,
		RouterModule,
    ],
	
})
export class SidenavModule { }

