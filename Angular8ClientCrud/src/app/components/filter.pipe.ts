import { Pipe, PipeTransform } from '@angular/core';
import {Event} from './models/event.model';
import {filtersValid} from './filters/filter.actions';

@Pipe({
  name: 'filterEvent'
})
export class FilterPipe implements PipeTransform {

  transform(events: Event[], filter: filtersValid): Event[] {

    switch ( filter ) {
      default:
        return events;
    }
  }
}