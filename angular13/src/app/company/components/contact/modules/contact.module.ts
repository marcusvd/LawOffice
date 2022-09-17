import { NgModule } from "@angular/core";

import { AngularImportsModule } from "../../../modules/angular-imports.module";
import { ContactComponent } from "../component/contact.component";

@NgModule({
  declarations:[
    ContactComponent
  ],
  imports:[
    AngularImportsModule,
   ],
  exports:[
    ContactComponent
  ]
})

export class ContactModule{}
