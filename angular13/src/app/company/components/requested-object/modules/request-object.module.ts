import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularImportsModule } from "src/app/company/modules/angular-imports.module";

import { RequestedObjectComponent } from "../requested-object-create/requested-object-create.component";



@NgModule({
  declarations: [
    RequestedObjectComponent
],
  imports: [
    AngularImportsModule,
  ],

  exports: []
})

export class RequestObjectModule {}
