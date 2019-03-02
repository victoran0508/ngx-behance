import { Pipe, PipeTransform } from '@angular/core';
import * as colorNamer from 'color-namer';
@Pipe({
  name: 'colorNamer'
})
export class ColorNamerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(colorNamer(`rgb(${value.r},${value.g},${value.b})`));
    return colorNamer(`rgb(${value.r},${value.g},${value.b})`).html[0].name;
  }

}
