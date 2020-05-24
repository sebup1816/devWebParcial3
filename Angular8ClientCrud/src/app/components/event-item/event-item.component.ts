import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Event} from '../models/event.model';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import * as actions from '../events.actions';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() event: Event;
  @ViewChild('inputControl') name: ElementRef;
  @ViewChild('inputControl') description: ElementRef;

  chkCompleted: FormControl;
  txtInput: FormControl;
  

  editing = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.txtInput = new FormControl( this.event.name, Validators.required );
    this.txtInput = new FormControl( this.event.description, Validators.required );
  }

  save() {
    this.editing = false;

    if ( this.txtInput.invalid ) { return; }
    if ( this.txtInput.value === this.event.name ) { return; }
  }

 

}
