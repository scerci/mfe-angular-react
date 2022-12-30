import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { ExternalRoutingModule } from './external-routing.module';
import { Extcomp1Component } from './extcomp1/extcomp1.component';
import { Extcomp2Component } from './extcomp2/extcomp2.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, Extcomp1Component, Extcomp2Component],
  imports: [BrowserModule, CommonModule, ExternalRoutingModule, SharedModule],
  exports: [DashboardComponent],
  bootstrap: [DashboardComponent],
})
export class ExternalModule {}
