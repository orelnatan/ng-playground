import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { InputErrorStateMatcher } from '../../classes/input-error-state-matcher.class';

@Component({
    selector: 'input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss']
})

export class InputText {
    @Input() control: FormControl = new FormControl();
    @Input() value: string;
    @Input() validation: string;
    @Input() placeholder: string;
    @Input() hint: string;
    @Input() readonly: boolean;

    @Output() onchange: EventEmitter<string> = new EventEmitter();
    
    matcher: ErrorStateMatcher = new InputErrorStateMatcher();
    


}
