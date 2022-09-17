import { Injectable } from "@angular/core";
import { Form, FormArray, FormControl } from "@angular/forms";
import { FormArrayName, FormBuilder, FormGroup, FormGroupName, Validators } from "@angular/forms";



@Injectable({
  providedIn: 'root'
})

export class ValidatorsGlobal {
  constructor(
    private _Fb: FormBuilder,
  ) { }

  // public _socialNetworks: SocialNetworkDto[] = [];
  public _FormsocialNetwork: FormGroup;
  public _FormContact: FormGroup;
  public _FormAddress: FormGroup;



  public _checkZap: boolean;

  // AddressFormEdit(): FormGroup {
  //   return this._FormAddress = this._Fb.group({
  //     id:['',[]],
  //     zipcode: ['', [Validators.minLength(2), Validators.maxLength(150)]],
  //     street: ['', [Validators.minLength(2), Validators.maxLength(150)]],
  //     number: ['', [Validators.minLength(2), Validators.maxLength(15)]],
  //     district: ['', [Validators.minLength(2), Validators.maxLength(150)]],
  //     city: ['', [Validators.minLength(2), Validators.maxLength(150)]],
  //     state: ['', [Validators.minLength(2), Validators.maxLength(150)]],
  //     complement: ['', [Validators.minLength(2), Validators.maxLength(500)]]
  //   });
  // };

  address(): FormGroup {
    return this._FormAddress = this._Fb.group({
      cep: ['', [Validators.minLength(5), Validators.maxLength(15)]],
      logradouro: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      numero: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(7)]],
      bairro: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      cidade: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      estado: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]],
      complemento: ['', [Validators.maxLength(500)]],
    });
  }

  contact(): FormGroup {
    return this._FormContact = this._Fb.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
      cel: ['', [Validators.minLength(9), Validators.maxLength(20)]],
      zap: ['', [Validators.minLength(2), Validators.maxLength(150)]],
      site: ['', [Validators.minLength(9), Validators.maxLength(20)]],
      landline: ['', [Validators.minLength(5), Validators.maxLength(150)]],
      socialnetworks: this._Fb.array([]),
    });
  }

  get snwControls() {
    return this._FormContact.controls['socialnetworks'] as FormArray;
  }

  addControls() {
    this.snwControls.push(this.socialnetWorks());
  }
  removeControls(i: number) {
    this.snwControls.removeAt(i);
  }

  socialnetWorks(): FormGroup {
    return this._FormsocialNetwork = this._Fb.group({
      id: ['', []],
      name: ['', []],
      url: ['', []]
    })

  }



  // ContactFormEdit(): FormGroup {
  //   //this._Fb.array(this._socialNetworks)
  //   return this._FormContact = this._Fb.group({
  //     id:['',[]],
  //     email: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
  //     cel: ['', [Validators.minLength(2), Validators.maxLength(150)]],
  //     zap: ['', [Validators.minLength(2), Validators.maxLength(150)]],
  //     site: ['', [Validators.minLength(9), Validators.maxLength(20)]],
  //     landline: ['', [Validators.minLength(2), Validators.maxLength(150)]],
  //     socialnetworks: []
  //   });

  // };

  public touchedErrors(ctrl: string, formGroup: FormGroup) {
    return formGroup.get(ctrl).errors
      && formGroup.get(ctrl).touched
      ? true : false;
  }
  mailField(ctrl: string, msgEmail: string, msgMax: string, msgReq: string, form: FormGroup) {
    return form.get(ctrl).hasError('email')
      ? msgEmail
      : form.get(ctrl).hasError('maxlength')
        ? msgMax
        : form.get(ctrl).hasError('required')
          ? msgReq : '';
  }
  public commonValidations(ctrl: string, error: string, msg: string, formGroup: FormGroup) {
    return formGroup.get(ctrl).hasError(error)
      ? msg : formGroup.get(ctrl).hasError(error)
        ? msg : formGroup.get(ctrl).hasError(error) ? '' : '';
  }
  //#endregion
  cleanAfters(toClean: string[], form?: FormGroup) {
    if (toClean.length != -1) {
      toClean.forEach((item) => {
        if (item.toLocaleLowerCase() === 'contact') {
          if (this._FormContact != undefined) {
            this._FormContact.reset();
            (<HTMLInputElement>document.getElementById('socialnetName')).value = '';
            (<HTMLInputElement>document.getElementById('socialnetUrl')).value = '';
            // this._socialNetworks = [];
          }
        }
        if (item.toLocaleLowerCase() === 'address') {
          if (this._FormAddress != undefined) {
            this._FormAddress.reset();
          }
        }
        if (form != undefined) {
          form.reset();
        }

      })
    }

  }


}
