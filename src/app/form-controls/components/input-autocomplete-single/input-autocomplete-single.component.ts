import { Component, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher, MatAutocomplete, } from '@angular/material';
import { InputErrorStateMatcher } from '../../classes/input-error-state-matcher.class';
import { Name } from './pipes/name.pipe';
import { IItem } from 'src/app/shared/models/iitem.model';

@Component({
    selector: 'input-autocomplete-single',
    templateUrl: './input-autocomplete-single.component.html',
    styleUrls: ['./input-autocomplete-single.component.scss'],
    providers: [ Name, ]
})

export class InputAutocompleteSingle implements OnChanges {
    @ViewChild(MatAutocomplete, { static: true }) autocomplete: MatAutocomplete;

    @Input() control: FormControl = new FormControl();
    @Input() selected: number;
    @Input() items: Array<IItem> = [];
    @Input() validation: string;
    @Input() placeholder: string;
    @Input() hint: string;
    @Input() readonly: boolean;

    @Output() onchange: EventEmitter<number> = new EventEmitter();
    
    matcher: ErrorStateMatcher = new InputErrorStateMatcher();

    constructor(
        private _name: Name
    ){}

    ngOnChanges(): void {
        this.control.setValue(this.selected);
    }
   
    displayWith = (id: number): string => {
        return this._name.transform(this.items, id);
    }

   
}
