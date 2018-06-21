import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gst'
})
export class GstPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value, args);
    return value > args? value*0.1: 0;
  }

}
