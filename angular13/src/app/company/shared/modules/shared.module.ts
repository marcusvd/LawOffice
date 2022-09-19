import { NgModule } from "@angular/core";
import { AppointmentComponent } from "../../components/appointment/component/appointment.component";
import { ResultForecastCreateComponent } from "../../components/result-forecast/components/result-forecast-create/result-forecast-create.component";
import { AngularImportsModule } from "../../modules/angular-imports.module";
import { OutsourcedModule } from "../../modules/outsourced.module";
import { GeneralRegistersComponent } from "../components/general-registers/general-registers.component";
import { NavBarComponent } from "../components/nav-bar/nav-bar/nav-bar.component";

@NgModule({
  declarations: [
    NavBarComponent,
    GeneralRegistersComponent,
    ResultForecastCreateComponent,



  ],
  imports: [
    //my-app
    AngularImportsModule,
    OutsourcedModule

  ],
  exports: [
    NavBarComponent
  ],
  providers: []
})

export class SharedModule {

}
