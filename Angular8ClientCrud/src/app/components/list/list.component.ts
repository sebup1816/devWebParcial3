import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {Event} from '../models/event.model';
import {filtersValid} from '../filters/filter.actions';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  events: Event[] = [];
  filterCurrent: filtersValid;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(({ events, filter }) => {
      this.events = events;
      this.filterCurrent = filter;
    } );
  }

}
