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

  txtInput: FormControl;
  txtInputD: FormControl;
  modeI: string;
  dateI: FormControl;

  editingName = false;
  editingDescription = false;
  editingMode = false;
  editingD = false;
  
  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.txtInput = new FormControl( this.event.name, Validators.required );
    this.txtInputD = new FormControl( this.event.description, Validators.required );
    this.dateI = new FormControl (this.event.date, Validators.required);
    this.modeI = this.event.mode;
  }
  editName(is:number) {
    if(is==0){
      this.editingName = true;
      //this.txtInput.setValue( this.event.name );
    }else if(is==1){
      this.editingDescription = true;
      //this.txtInputD.setValue(this.event.description);
    }else if(is==3) {
      this.editingMode=true;
     this.modeI=this.alternate(this.event.mode);
      this.save()
    }else if(is==4){
      this.editingD = true;
    }
  }

  alternate(mode: string){
    var a=["initiated","activate","end"];
      if(mode==a[0]){
        return a[1]; 
      }else if(mode==a[1]){
        return a[2]
      }else{
        return a[0]
      }
  }

  save() {
    this.editingName = false;
    this.editingDescription = false;
    this.editingMode = false;
    
    this.store.dispatch(
      actions.editName({
        id: this.event.id,
        name: this.txtInput.value,
        description: this.txtInputD.value,
        mode: this.modeI,
        date: new Date(this.dateI.value)
      })
    );
    console.log(this.dateI);
    console.log(this.event.date)
  }
}
