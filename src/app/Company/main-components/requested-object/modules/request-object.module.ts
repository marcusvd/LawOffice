import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxModule } from "src/app/company/shared/modules/ngx.module";
import { SharedModule } from "src/app/company/shared/modules/shared.module";



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NgxModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: []
})

export class RequestObjectModule {

}
