import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{AddComponent} from'./add/add.component';
import{ListComponent} from'./list/list.component';
import{EventsComponent} from'./events/events.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { EventItemComponent } from './event-item/event-item.component';



@NgModule({
  declarations: [AddComponent,ListComponent,EventsComponent, EventItemComponent],
  exports: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class eventsModule { }