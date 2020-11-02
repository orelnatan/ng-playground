import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from 'src/app/shared/models/iitem.model';

@Pipe({
   name: 'name',
})
export class Name implements PipeTransform {
    transform(items: Array<IItem>, id: number): string {
        if(!id) return;
      
        return items.find((item: IItem) => item.ID == id).NAME;
    }
}