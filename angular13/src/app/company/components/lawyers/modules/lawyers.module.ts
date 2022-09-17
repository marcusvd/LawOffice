import { NgModule } from "@angular/core";

import { AngularImportsModule } from "src/app/company/modules/angular-imports.module";
import { LawyersCreateComponent } from "../components/lawyers-create/lawyers-create.component";

@NgModule({
  declarations:[LawyersCreateComponent],
  imports:[AngularImportsModule],
  exports:[],
})

export class LawyersModule{}
