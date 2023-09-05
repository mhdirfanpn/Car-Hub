import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(!args) return value
    args = args.toLowerCase()
    return value.filter(v=>{
      return JSON.stringify(v).toLowerCase().includes(args)
    })
  }
}
