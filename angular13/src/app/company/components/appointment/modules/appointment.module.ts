import { NgModule } from "@angular/core";

import { AngularImportsModule } from "src/app/company/modules/angular-imports.module";
import { AppointmentComponent } from "../component/appointment.component";
import { AppointmentRoutingModule } from "./appointment-routing.module";

@NgModule({
  declarations:[
    AppointmentComponent
  ],
  imports:[
    AngularImportsModule,
    AppointmentRoutingModule
  ],
  exports:[]
})

export class AppointmentModule{}
