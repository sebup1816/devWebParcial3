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

  /*
  @ViewChild('inputControl') name: ElementRef;
  @ViewChild('inputControl') description: ElementRef;
  @ViewChild('inputControl') date: ElementRef;
  @ViewChild('inputControl') mode: ElementRef;*/

  txtInput: FormControl;
  txtInputD: FormControl;

  mode: string;

  editingName = false;
  editingDescription = false;
  editingMode = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.txtInput = new FormControl( this.event.name, Validators.required );
    this.txtInputD = new FormControl( this.event.description, Validators.required );
  }
  editName(is:number) {
    if(is==0){
      this.editingName = true;
      this.txtInput.setValue( this.event.name );
    }else if(is==1){
      this.editingDescription = true;
      this.txtInputD.setValue(this.event.description);
    }else {
      this.mode="end"
      this.save();
    }
  }

  save() {
    this.editingName = false;
    this.editingDescription = false;
    this.editingMode = false;
    if ( this.txtInput.invalid && this.txtInputD.invalid) { return; }
    if ( this.txtInput.value === this.event.name && this.txtInputD.value === this.event.description) { return; }
    this.store.dispatch(
      actions.editName({
        id: this.event.id,
        name: this.txtInput.value,
        description: this.txtInputD.value,
        mode: this.mode
      })
    );
  }


}
