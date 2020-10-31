import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { InputErrorStateMatcher } from '../../classes/input-error-state-matcher.class';

@Component({
  selector: 'input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss']
})

export class InputTextarea {
    @Input() control: FormControl = new FormControl();
    @Input() value: string;
    @Input() validation: string;
    @Input() placeholder: string;
    @Input() hint: string;
    @Input() readonly: boolean;
    @Input() rows: number;
    @Input() cols: number;
    @Input() maxlength: number

    @Output() onchange: EventEmitter<string> = new EventEmitter();

    matcher: ErrorStateMatcher = new InputErrorStateMatcher();

}
