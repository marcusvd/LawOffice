import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ValuesCreateComponent } from './company/components/values/components/values-create/values-create.component';

import { AngularImportsModule } from './company/modules/angular-imports.module';
import { FeaturesModule } from './company/modules/features.module';
import { OutsourcedModule } from './company/modules/outsourced.module';
import { SharedModule } from './company/shared/modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ValuesCreateComponent,

  ],
  imports: [
    //angular
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //my
    AngularImportsModule,
    //features of app
    FeaturesModule,
    //outSourced
    OutsourcedModule,
    //shared all app
    SharedModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
