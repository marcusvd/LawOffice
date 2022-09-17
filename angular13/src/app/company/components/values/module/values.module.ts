import { NgModule } from "@angular/core";
import { AngularImportsModule } from "src/app/company/modules/angular-imports.module";
import { ValuesCreateComponent } from "../components/values-create/values-create.component";
// import { ValuesCreateComponent } from 'src/app/company/main-components/values/values-create/values-create.component';

@NgModule({
  declarations:[
    ValuesCreateComponent
  ],
  imports:[
    AngularImportsModule
  ],
  exports:[],
  providers:[]
})

export class ValuesModule {
}
