import { NgModule } from "@angular/core";
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SharedModule } from "./shared.module";


@NgModule({
declarations:[],
  imports:[
    TabsModule.forRoot()

  ],
  exports:[TabsModule],
  providers:[]
})

export class NgxModule{

}
