import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './company/shared/shareds-components/address/address.component';
import { ContactComponent } from './company/shared/shareds-components/contact/contact.component';
import { GeneralRegistersComponent } from './company/shared/shareds-components/general-registers/general-registers.component';

const routes: Routes = [
  {path: 'registers', component: GeneralRegistersComponent},
  {path: 'tests', component: AddressComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
