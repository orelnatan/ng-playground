import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher, MatOption } from '@angular/material';
import { InputErrorStateMatcher } from '../../classes/input-error-state-matcher.class';
import { IItem } from 'src/app/shared/models/iitem.model';

@Component({
    selector: 'input-autocomplete-single',
    templateUrl: './input-autocomplete-single.component.html',
    styleUrls: ['./input-autocomplete-single.component.scss']
})

export class InputAutocompleteSingle {
    @Input() control: FormControl = new FormControl();
    @Input() items: Array<IItem> = [];
    @Input() validation: string;
    @Input() placeholder: string;
    @Input() hint: string;
    @Input() readonly: boolean;

    @Output() onchange: EventEmitter<number> = new EventEmitter();
    
    matcher: ErrorStateMatcher = new InputErrorStateMatcher();
    
    
    handleChnage(item: IItem): void {
        this.onchange.emit(item.ID);
    }

    displayFn(item: IItem): string {
        return item && item.NAME ? item.NAME : '';
    }

}
