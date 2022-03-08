import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxModule } from './Company/shared/modules/ngx.module';
import { SharedModule } from './Company/shared/modules/shared.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
