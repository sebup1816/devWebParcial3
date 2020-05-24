import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import{AppState} from '../../app.reducer';
import {FormControl, Validators} from '@angular/forms';
import * as actions from '../events.actions';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  name: FormControl;
  description: FormControl;
  date: FormControl;

  constructor(private store:Store<AppState>,private toastr: ToastrService) { 
    this.name = new FormControl('', Validators.required);
    this.description=new FormControl('', Validators.required);
    this.date=new FormControl('',Validators.required);
  }

  ngOnInit(): void {
  }

  add() {
    if (this.name.invalid && this.description.invalid ) { return ;  }
    this.store.dispatch( actions.add( { name:this.name.value, description: this.description.value, date:new Date(this.date.value)} ) );
    this.name.reset();
    this.description.reset();
    this.toastr.success("EVENT CREATED!")
  }

}
