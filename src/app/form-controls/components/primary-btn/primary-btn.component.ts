import { Component, Input, Output, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material';

@Component({
  selector: 'primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.scss']
})

export class PrimaryBtn {
    @ViewChild(MatButton, { static: false }) button: MatButton;

    @Input() type: string = "submit";
    @Input() caption: string;
    @Input() icon: string;
    @Input() disabled: boolean;
    @Input() inProgress: boolean;
    
    @Output() onclick: EventEmitter<void> = new EventEmitter();


    public push(): void {
        this.button._elementRef.nativeElement.click();
    }
}
