import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { AccountApi } from '../../../../api/base';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { finalize, map, switchMap, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AbstractControl,
    ControlValueAccessor,
    FormBuilder,
    FormGroup,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR, ValidationErrors,
    Validator,
    Validators,
} from '@angular/forms';

let uniqueId = 0;

@Component({
    selector: 'app-page-dashboard',
    templateUrl: './page-dashboard.component.html',
})
export class PageDashboardComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();
	private readonly dataId: number = ++uniqueId;
	form: FormGroup;
	saveInProgress = false;
	get formId(): string {
        return `app-addproduct-form-id-${this.dataId}`;
    }
    
	constructor(
        public account: AccountApi,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
    ) { }
	
   

    ngOnInit(): void {
        this.form = this.fb.group({
            sku: ['', Validators.required],
            sneakerName:  ['', Validators.required],
            brand:   ['', Validators.required],
            colorway:   ['', Validators.required],
            size:  ['', Validators.required],
            boxcondition:      ['', Validators.required],
			images:  [''],
            price:     ['', Validators.required],
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
	
	save(): void {
        this.form.markAllAsTouched();
        
        if (this.saveInProgress || this.form.invalid){
            return;
        }


        this.saveInProgress = true;

        
    }
}
