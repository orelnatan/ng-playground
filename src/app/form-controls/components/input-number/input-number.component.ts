import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { InputErrorStateMatcher } from '../../classes/input-error-state-matcher.class';

@Component({
  selector: 'input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})

export class InputNumber {
    @Input() control: FormControl = new FormControl();
    @Input() value: string;
    @Input() validation: string;
    @Input() placeholder: string;
    @Input() hint: string;
    @Input() readonly: boolean;

    @Output() onchange: EventEmitter<number> = new EventEmitter();
    
    matcher: ErrorStateMatcher = new InputErrorStateMatcher();
    
}
