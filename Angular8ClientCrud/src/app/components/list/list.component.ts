import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {Event} from '../models/event.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  events: Event[] = [];
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(({ events }) => {
      this.events = events;
    } );
  }

}
