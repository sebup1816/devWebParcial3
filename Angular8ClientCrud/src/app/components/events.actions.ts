import {createAction, props} from '@ngrx/store';


export const add = createAction(
  '[EVENT] Create event',
        props<{ name: string , description: string}>()
);