import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-page-components',
    templateUrl: './page-components.component.html',
})
export class PageComponentsComponent {
    inputNumber: FormControl = new FormControl(3);

    constructor() { }
}
