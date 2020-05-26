import {Event} from './components/models/event.model';
import {ActionReducerMap} from '@ngrx/store';
import {reducer} from './components/events.reducer';

export interface AppState {
  events: Event[]
  
}

export const appReducers: ActionReducerMap<AppState> = {
  events: reducer,
  
}