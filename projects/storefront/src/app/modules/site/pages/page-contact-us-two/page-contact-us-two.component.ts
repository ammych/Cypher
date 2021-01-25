import { Component } from '@angular/core';
import { theme } from '../../../../../data/theme';

@Component({
    selector: 'app-page-contact-us-two',
    templateUrl: './page-contact-us-two.component.html',
})
export class PageContactUsTwoComponent {
    theme = theme;

    constructor() { }
}
