import { Component, OnInit, } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Ipsum } from 'src/app/shared/modals/ipsum/ipsum.modal';
import { Loader } from 'src/app/shared/modals/loader/loader.modal';
import { IFile } from 'src/app/shared/models/ifile.model';
import { IItem } from 'src/app/shared/models/iitem.model';

interface ILogin {
    USERNAME: string;
    DATE: string;
    EXPERTY: number;
    TERMS: boolean;
    CITYS: Array<number>;
    FILES: Array<IFile>;
}

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class Home { 
    login: ILogin = {
        USERNAME: null,
        DATE: null,
        EXPERTY: null,
        TERMS: null,
        CITYS: [2,4,6,7],
        FILES: []
    }

    items: Array<IItem> = [
        {
            ID: 1,
            NAME: "Moshe Malul",
        },
        {
            ID: 2,
            NAME: "Ural gave",
        },
        {
            ID: 3,
            NAME: "Avi Hazan",
            DISABLED: true
        },
        {
            ID: 4,
            NAME: "Tony Montana",
        },
        {
            ID: 5,
            NAME: "Tony shapiro",
        },
        {
            ID: 6,
            NAME: "Tom Cruise",
        },
        {
            ID: 7,
            NAME: "Tim Cook",
        },
        {
            ID: 8,
            NAME: "Yehuda Hazan",
        },
        {
            ID: 9,
            NAME: "Brian O'Connor",
        },
        {
            ID: 10,
            NAME: "Mine in Regina",
        }
    ]

    refname: string = "username";

    constructor(
        private _dialog: MatDialog
    ) {}


    print(e){
        console.log(e)
    }

    showModal(): void {
        const dialogRef = this._dialog.open(Loader, {
            
        });
    }

    onSubmit(login: ILogin): void {
        console.log(login);
        this.showModal();
    }

}