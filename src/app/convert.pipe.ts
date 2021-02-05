import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    console.log(value)
    
    console.log(parseFloat(value) * 1.609)

    if(!value){
      return null
    }else{
      return parseFloat(value) * 1.609;
    }
    
  }

}
