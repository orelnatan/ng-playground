import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})

export class Spinner {
    @Input() diameter: number;
    @Input() thickness: number
    
}
