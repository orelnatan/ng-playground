import { Component, Input, Output, EventEmitter, ViewChild, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher, MatDatepicker } from '@angular/material';
import { InputErrorStateMatcher } from '../../classes/input-error-state-matcher.class';

import * as moment from 'moment';

@Component({
  selector: 'input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss', ],
})
// For initial value max/min/value use format: 2011-05-28 || 2010-06-01
export class InputDate {
    @Input() control: FormControl = new FormControl();

    @ViewChild(MatDatepicker, { static: false }) datepicker: MatDatepicker<any>;

    @Input() value: string;
    @Input() placeholder: string;
    @Input() hint: string;
    @Input() min: string;
    @Input() max: string;
    @Input() validation: string;
    @Input() readonly: boolean;

    @Output() onchange: EventEmitter<string> = new EventEmitter();

    matcher: ErrorStateMatcher = new InputErrorStateMatcher();

    dateChanged(timestamp: string): void {
        this.onchange.emit(
            moment(timestamp).format("YYYY-MM-DD")
        );
    }



    
}

