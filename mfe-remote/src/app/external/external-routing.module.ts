import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Extcomp1Component } from './extcomp1/extcomp1.component';
import { Extcomp2Component } from './extcomp2/extcomp2.component';

const routes: Routes = [
  { path: 'c1', component: Extcomp1Component },
  { path: 'c2', component: Extcomp2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ExternalRoutingModule {}
