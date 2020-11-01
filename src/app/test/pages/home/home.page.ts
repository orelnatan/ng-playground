import { Component, OnInit, } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Ipsum } from 'src/app/shared/modals/ipsum/ipsum.modal';
import { Loader } from 'src/app/shared/modals/loader/loader.modal';
import { IItem } from 'src/app/shared/models/iitem.model';

interface ILogin {
    USERNAME: string;
    DATE: string;
    EXPERTY: IItem;
    TERMS: boolean;
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
        TERMS: null
    }


    items: Array<IItem> = [
        {
            ID: 1,
            NAME: "item 1",
        },
        {
            ID: 2,
            NAME: "item 2",
        },
        {
            ID: 3,
            NAME: "item 3",
        },
        {
            ID: 4,
            NAME: "item 4",
        },
        {
            ID: 5,
            NAME: "item 5",
        },
        {
            ID: 6,
            NAME: "item 6",
        },
        {
            ID: 7,
            NAME: "item 7",
        },
        {
            ID: 8,
            NAME: "item 8",
        },
        {
            ID: 9,
            NAME: "item 9",
        },
        {
            ID: 10,
            NAME: "item 10",
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

    }

}