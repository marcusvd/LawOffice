import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './company/main-components/client/modules/client.module';
import { RequestObjectModule } from './company/main-components/requested-object/modules/request-object.module';
import { NgxModule } from './company/shared/modules/ngx.module';
import { SharedModule } from './company/shared/modules/shared.module';











@NgModule({
  declarations: [
    AppComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgxModule,
    ClientModule,
    RequestObjectModule
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
