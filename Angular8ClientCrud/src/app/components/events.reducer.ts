import {createReducer, on} from '@ngrx/store';
import {add, editName} from './events.actions';
import { Event} from './models/event.model';


export const initialState: Event[] = [
  new Event('Maratones','Programar mucho',new Date('01/02/2020'), 'init')
];

const eventReducer = createReducer(initialState,
    on(add, (state, { name, description, date, mode }) => [...state, new Event( name,description,date, mode)]),

    on(editName, (state, { id, name, description,mode }) => {
      return state.map( event => {
        if ( event.id === id ) {
          return {
            ...event,
            name,
            description,
            mode
          };
        }  else {
          return event;
        }
      });
    }),
  
    /*on(toggle, (state, { id }) => {
      return state.map( todo => {
        if ( todo.id === id ) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }  else {
          return todo;
        }
      });
    }),
  
    
  
    on(remove, (state, { id }) =>  state.filter( todo => todo.id !== id )),
  
    on(toggleAll, (state, { completed }) => {
      return state.map( todo => {
          return {
            ...todo,
            completed
          };
      });
    }),
    
    //on(clearComplete, (state) => state.filter( todo => !todo.completed )),*/
  );
  
  
  export function reducer( state, action ) {
    return eventReducer(state, action);
  }