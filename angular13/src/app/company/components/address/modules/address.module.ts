import { NgModule } from "@angular/core";

import { AngularImportsModule } from "../../../modules/angular-imports.module";
import { AddressComponent } from "../component/address.component";

@NgModule({
  declarations:[AddressComponent],
  imports:[
    //angular
    AngularImportsModule,
    // //OutSourced
    // NgxModule,
    //my-app

  ],
  exports:[]
})
export class AddressModule{}
