import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [DashboardComponent],
  imports: [BrowserModule, CommonModule],
  exports: [DashboardComponent],
  bootstrap: [DashboardComponent],
})
export class ExternalModule {}
