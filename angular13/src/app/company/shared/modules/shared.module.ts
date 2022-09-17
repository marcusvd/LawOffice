import { NgModule } from "@angular/core";
import { AngularImportsModule } from "../../modules/angular-imports.module";
import { NavBarComponent } from "../components/nav-bar/nav-bar/nav-bar.component";

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    //my-app
    AngularImportsModule
  ],
  exports: [
    NavBarComponent
  ],
  providers: []
})

export class SharedModule {

}
