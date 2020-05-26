import {createAction, props} from '@ngrx/store';


export const add = createAction(
  '[EVENT] Create event',
        props<{ name: string , description: string, date: Date, mode: string}>()
);

export const editName = createAction(
  '[EVENT] Edit name',
        props<{id: number, name: string, description:string, mode:string, date:Date}>()
)