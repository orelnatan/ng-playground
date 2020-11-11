import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from 'src/app/shared/models/iitem.model';

@Pipe({
   name: 'filter',
})
export class Filter implements PipeTransform {
    transform(items: Array<IItem>, keyword: string): Array<IItem> {
        return keyword ? items.filter((item: IItem) => {
            if(item.NAME.toLowerCase().includes(keyword.toLowerCase())) {
                return item;
            }
        }) : items;
    }
}