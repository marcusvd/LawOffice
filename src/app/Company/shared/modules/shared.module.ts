import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxModule } from "./ngx.module";

// import { ClientModule } from "src/app/company/main-components/Client/modules/client.module";
import { LawyersCreateComponent } from 'src/app/company/main-components/lawyers/lawyers-create/lawyers-create.component';
import { ClientCreateComponent } from "src/app/company/main-components/client/client-create/client-create.component";
import { AddressComponent } from "../shareds-components/address/address.component";
import { ContactComponent } from "../shareds-components/contact/contact.component";
import { GeneralRegistersComponent } from "../shareds-components/general-registers/general-registers.component";
import { OfficeCreateComponent } from 'src/app/company/main-components/office/office-create/office-create.component';
import { AppointmentComponent } from 'src/app/company/main-components/appointment/appointment.component';
import { LegalProcessCreateComponent } from "../../main-components/legal-process/legal-process-create/legal-process-create.component";
import { ResultForecastCreateComponent } from '../../main-components/result-forecast-create/result-forecast-create.component';


@NgModule({
  declarations: [
    GeneralRegistersComponent,
    ContactComponent,
    AddressComponent,
    ClientCreateComponent,
    LawyersCreateComponent,
    OfficeCreateComponent,
    AppointmentComponent,
    LegalProcessCreateComponent,
    ResultForecastCreateComponent


  ],
  imports: [
    NgxModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule


  ],
  exports: [
    GeneralRegistersComponent,
    ContactComponent,
    AddressComponent,
    OfficeCreateComponent,
    AppointmentComponent
  ],
  providers: []
})

export class SharedModule {

}
