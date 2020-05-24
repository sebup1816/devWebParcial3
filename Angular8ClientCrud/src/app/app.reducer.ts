import {Event} from './components/models/event.model';
import {ActionReducerMap} from '@ngrx/store';
import {reducer} from './components/events.reducer';
import {filtersValid} from './components/filters/filter.actions';
import {filterReducer} from './components/filters/filter.reducer';


export interface AppState {
  events: Event[]
  filter: filtersValid
}

export const appReducers: ActionReducerMap<AppState> = {
  events: reducer,
  filter: filterReducer
}