import { Component, HostBinding } from '@angular/core';
import { sideMenu } from '../../../../../data/header-side-menu';
import { SideMenuLink } from '../../../../interfaces/side-menu-link';
import { HeaderService } from '../../../../services/header.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
})

export class SidenavComponent {
    items: SideMenuLink[] = sideMenu;

    hoveredItem;

    @HostBinding('class.side-menu') classSideMenu = true;

    constructor(
        public header: HeaderService,
    ) {}

    onItemEnter(item: any): void {
        this.hoveredItem = item;
    }

    onItemLeave(item: any): void {
        if ( this.hoveredItem === item ) {
            this.hoveredItem = null;
        }
    }

    onItemClick(): void {
        this.hoveredItem = null;
    }
}