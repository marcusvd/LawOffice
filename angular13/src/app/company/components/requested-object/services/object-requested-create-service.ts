import { Injectable } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";


@Injectable()
export class ObjectRequestedCreateService {



  private formMain: FormGroup;
  private form2: FormGroup;



  constructor(
    private _Fb: FormBuilder
  ) {

  }

  get getControls() {
    return <FormArray>this.formMain.get('requesteds');
  }

   addControls() {
   this.getControls.push(this.formSec());
  }

   removeControls(i:number) {
   this.getControls.removeAt(i);
  }

  get getForm() {
    return this.formMain
  }





  formLoad() {
   return this.formMain = this._Fb.group({
      item: ['', []],
      requesteds: this._Fb.array([this.formSec()])
    })
  }
  formSec() {
  return this.form2 = this._Fb.group({
    itemRequested: ['', []],
    })
  }



}
