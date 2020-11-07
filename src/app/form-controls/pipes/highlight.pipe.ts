import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'highlight',
})
export class Highlight implements PipeTransform {
    transform(value: string, keyword: string): string {
        if(keyword == " ") return value;
      
        return value.replace(keyword.toLowerCase(), `<mark>${keyword.toLowerCase()}</mark>`); 
    }
}