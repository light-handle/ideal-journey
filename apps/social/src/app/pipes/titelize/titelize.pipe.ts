import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titelize'
})
export class TitelizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return null;
    } else {
      return value.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ));
    }
  }

}
