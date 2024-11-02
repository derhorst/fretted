import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice',
  standalone: true
})
export class SlicePipe implements PipeTransform {

  transform<T>(array: T[], start: number, end?: number): T[] {
    return [...array].splice(start, end);
  }

}
