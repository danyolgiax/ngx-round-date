import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundDate'
})
export class RoundDatePipe implements PipeTransform {

  transform(value: Date, minutes?: number): Date {

    const _minutes= minutes!=null ? minutes : 5

    var gap = 1000 * 60 * _minutes;

    return new Date(Math.round(value.getTime() / gap) * gap)
  }
}
