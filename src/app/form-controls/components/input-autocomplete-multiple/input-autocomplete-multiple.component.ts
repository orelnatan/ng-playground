import { Component, Input, Output, EventEmitter, OnInit, ViewChild, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher, MatAutocomplete, MatOption } from '@angular/material';
import { InputErrorStateMatcher } from '../../classes/input-error-state-matcher.class';
import { Name } from '../../pipes/name.pipe';
import { IItem } from 'src/app/shared/models/iitem.model'; 

interface IAutocompleteItem {
    display: string;
    value: string;
    disabled: boolean;
}

@Component({
    selector: 'input-autocomplete-multiple',
    templateUrl: './input-autocomplete-multiple.component.html',
    styleUrls: ['./input-autocomplete-multiple.component.scss'],
    providers: [ Name, ]
})

export class InputAutocompleteMultiple implements OnChanges {
    

   // @ViewChild(SelectAutocompleteComponent, { static: true }) autocomplete: SelectAutocompleteComponent;

    @Input() control: FormControl = new FormControl();
    @Input() selecteds: Array<string>;
    @Input() items: Array<IItem> = [];
    @Input() validation: string;
    @Input() placeholder: string;
    @Input() hint: string;
    @Input() required: boolean;
    @Input() readonly: boolean;

    @Output() onchange: EventEmitter<string[]> = new EventEmitter();

    options: Array<IAutocompleteItem> = [];

    ngOnChanges(): void {
        // this.items.forEach(element => {
        //     this.options.push({
        //         display: element.NAME,
        //         value: String(element.ID),
        //         disabled: false
        //     })
        // });
    }
   

    toggle(){
        //this.autocomplete.toggleDropdown();
    }
}
