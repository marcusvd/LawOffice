import { NgModule } from "@angular/core";

import { AddressModule } from "../components/address/modules/address.module";
import { AppointmentModule } from "../components/appointment/modules/appointment.module";
import { ClientModule } from "../components/client/modules/client.module";
import { ContactModule } from "../components/contact/modules/contact.module";
import { RequestObjectModule } from "../components/requested-object/modules/request-object.module";
import { AngularImportsModule } from "./angular-imports.module";

@NgModule({
  declarations: [
  ],

  imports: [
    AddressModule,
    ContactModule,
    ClientModule,
    RequestObjectModule,
    AppointmentModule,
  ],

  exports: [
    AddressModule,
    ContactModule,
    ClientModule,
    RequestObjectModule,
    AppointmentModule,
  ],
  providers: []
})

export class FeaturesModule {

}
