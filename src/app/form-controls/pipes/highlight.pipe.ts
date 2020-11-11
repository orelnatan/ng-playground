import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'highlight',
})
export class Highlight implements PipeTransform {
    transform(value: string, keyword: string): string {
        if(!value || !keyword) return value;
        
        return value.toLowerCase().replace(keyword.toLowerCase(), `<mark>${keyword}</mark>`); 
    }
}