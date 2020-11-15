import { Component, Input, Output, EventEmitter, ViewChild, OnChanges, HostListener, AfterViewInit, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher, MatSelect, MatSelectChange, MatSelectionListChange } from '@angular/material';
import { IFile } from 'src/app/shared/models/ifile.model';
import { InputErrorStateMatcher } from '../../classes/input-error-state-matcher.class';

@Component({
  selector: 'input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss', ],
})

export class InputFile {
    @ViewChild(MatSelect, { static: true }) select: MatSelect;

    @Input() control: FormControl = new FormControl();
    @Input() files: Array<IFile> = [];
    @Input() placeholder: string;
    @Input() hint: string;
    @Input() validation: string;
    @Input() readonly: boolean;
    @Input() required: boolean;

    @Output() onchange: EventEmitter<IFile[]> = new EventEmitter();
    @Output() onselect: EventEmitter<IFile> = new EventEmitter();

    matcher: ErrorStateMatcher = new InputErrorStateMatcher();

    ngOnChanges(): void {
        this.select.disabled = this.readonly;
    }

    handleChange(event: MatSelectChange): void {
        if(!event.source.selected) return;
        
        this.onchange.emit([ ...this.files ]);
    }

    generateId(): number {
        return this.files.length ? Math.max.apply(null, this.files.map(
            (item: IFile) => item.ID)
        ) + 1 : 0;
    }

    removeFile(id: number): void {
        const index: number = this.files.map((item: IFile) => item.ID).indexOf(id);

        this.files.splice(index, 1);
        this.onchange.emit([ ...this.files ]);
    }

    createHTMLFileInputElement(): void {
        const fileInput: HTMLElement = document.createElement('input');

        fileInput.style.display = "none";
        fileInput.setAttribute("type", "file");
        fileInput.setAttribute("multiple", "true");

        fileInput.click();
        fileInput.addEventListener("change", (event: Event) => {
            this.generateFiles(event);
        })
    }

    generateFiles(event: Event): void { 
        const files: Array<File> = Array.from(event.target['files']);
       
        files.forEach((file: File, index: number): void => {
            const reader: FileReader = new FileReader();
           
            reader.onload = (load: Event): void => {
                const file64Bit: string = String(load.target['result']);
            
                this.files.push({
                    ID: this.generateId(),
                    NAME: file.name,
                    SIZE: file.size,
                    TYPE: file.type,
                    DATA64BIT: file64Bit,
                    LAST_MODIFIED: file.lastModified,
                });

                if(index == files.length - 1) 
                    this.onchange.emit([ ...this.files ]);
            };
            reader.readAsDataURL(file);
        });
    }

}

