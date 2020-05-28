import {createReducer, on} from '@ngrx/store';
import {add, editName} from './events.actions';
import { Event} from './models/event.model';


export const initialState: Event[] = [
  new Event('Maratones','Programar mucho',new Date('01/02/2020'), 'init'),
  new Event('Olimpiadas','Ser Dios matematico', new Date('06/06/2016'), 'end'),
  new Event('Feria de posters','Proyectos en posters', new Date('05/24/2020'), 'active')
];

const eventReducer = createReducer(initialState,
    on(add, (state, { name, description, date, mode }) => [...state, new Event( name,description,date, mode)]),

    on(editName, (state, { id, name, description,mode, date }) => {
      return state.map( event => {
        if ( event.id === id ) {
          return {
            ...event,
            name,
            description,
            mode,
            date
          };
        }  else {
          return event;
        }
      });
    }),
  );
  
  
  export function reducer( state, action ) {
    return eventReducer(state, action);
  }