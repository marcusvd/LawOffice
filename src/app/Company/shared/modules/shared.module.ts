import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContactComponent } from "../components/contact/contact.component";
import { GeneralRegistersComponent } from "../components/general-registers/general-registers.component";
import { NgxModule } from "./ngx.module";

@NgModule({
  declarations: [GeneralRegistersComponent,
    ContactComponent
  ],
  imports: [
    NgxModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule

  ],
  exports: [
    GeneralRegistersComponent,
    ContactComponent
  ],
  providers: []
})

export class SharedModule {

}
