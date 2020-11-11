import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { debounceTime } from 'rxjs/operators';
import { InputErrorStateMatcher } from '../../classes/input-error-state-matcher.class';

const DEBOUNCE_TIME: number = 600;

@Component({
    selector: 'input-search',
    templateUrl: './input-search.component.html',
    styleUrls: ['./input-search.component.scss']
})

export class InputSearch {
    @ViewChild("searchbox", { static: false }) searchbox: HTMLInputElement;
    
    @Input() control: FormControl = new FormControl();
    @Input() value: string;
    @Input() validation: string;
    @Input() placeholder: string;
    @Input() hint: string;
    @Input() readonly: boolean;

    @Output() onchange: EventEmitter<string> = new EventEmitter();
    
    matcher: ErrorStateMatcher = new InputErrorStateMatcher();
    

    constructor() {
        this.control.valueChanges
            .pipe(debounceTime(DEBOUNCE_TIME))
                        .subscribe((value: string) => {

            this.value = value;
            this.onchange.emit(value);
        });
    }


}
