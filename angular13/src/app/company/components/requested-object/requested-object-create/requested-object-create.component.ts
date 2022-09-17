import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ObjectRequestedCreateService } from '../services/object-requested-create-service';

@Component({
  selector: 'requested-object-create',
  templateUrl: './requested-object-create.component.html',
  styleUrls: ['./requested-object-create.component.css']
})
export class RequestedObjectComponent implements OnInit {

  constructor(
    private _ObjectRequestedCreateService: ObjectRequestedCreateService
  ) { }


  addControls(){
    this._ObjectRequestedCreateService.addControls();
  }
  removeControls(i: number){
    this._ObjectRequestedCreateService.removeControls(i);
  }

  get getControls():FormArray {
    return this._ObjectRequestedCreateService.getControls;
  }

  get form():FormGroup {
    return this._ObjectRequestedCreateService.getForm;
  }

  ngOnInit(): void {
    this._ObjectRequestedCreateService.formLoad();
  }

}
