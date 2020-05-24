import {createReducer, on} from '@ngrx/store';
import {filtersValid, setFilter} from './filter.actions';


export const initialState: filtersValid = 'all';

const _filterReducer = createReducer(initialState,
  on(setFilter , (state, { filter }) => filter ),
);


export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
