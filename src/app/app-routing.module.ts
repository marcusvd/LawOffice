import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralRegistersComponent } from './Company/shared/components/general-registers/general-registers.component';

const routes: Routes = [{path: 'registers', component: GeneralRegistersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
