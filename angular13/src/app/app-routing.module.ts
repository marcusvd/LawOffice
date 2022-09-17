import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressComponent } from './company/components/address/component/address.component';
import { RequestedObjectComponent } from './company/components/requested-object/requested-object-create/requested-object-create.component';
import { GeneralRegistersComponent } from './company/shared/components/general-registers/general-registers.component';

const routes: Routes = [
  {path: 'registers', component: GeneralRegistersComponent},
  {path: 'obj', component: RequestedObjectComponent},
  {path: 'tests', component: AddressComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
