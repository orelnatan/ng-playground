import { Component, Input, Output, EventEmitter, ViewChild, OnChanges, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher, MatSelect, MatSelectChange } from '@angular/material';
import { InputErrorStateMatcher } from '../../classes/input-error-state-matcher.class';
import { IItem } from 'src/app/shared/models/iitem.model';

@Component({
  selector: 'input-single-select',
  templateUrl: './input-single-select.component.html',
  styleUrls: ['./input-single-select.component.scss', ],
})

export class InputSingleSelect implements OnChanges {
    @ViewChild(MatSelect, { static: true }) select: MatSelect;

    @Input() control: FormControl = new FormControl();
    @Input() items: Array<IItem> = [];
    @Input() selected: number;
    @Input() placeholder: string;
    @Input() hint: string;
    @Input() validation: string;
    @Input() readonly: boolean;
    @Input() required: boolean;

    @Output() onchange: EventEmitter<number> = new EventEmitter();

    matcher: ErrorStateMatcher = new InputErrorStateMatcher();

    ngOnChanges(): void {
        this.select.disabled = this.readonly;
    }

    handleChange(event: MatSelectChange): void {
        if(!event.source.selected) return;

        this.onchange.emit(event.source.value);
    }

    compareWith(arg1: number, arg2: number): boolean {
        if(!arg1 || !arg2) return;

        return arg1 === arg2;
    }

}

