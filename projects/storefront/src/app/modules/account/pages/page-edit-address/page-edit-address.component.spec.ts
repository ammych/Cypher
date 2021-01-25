import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageEditAddressComponent } from './page-edit-address.component';

describe('PageEditAddressComponent', () => {
    let component: PageEditAddressComponent;
    let fixture: ComponentFixture<PageEditAddressComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageEditAddressComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageEditAddressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
