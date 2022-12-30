import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Appcomp1Component } from './appcomp1/appcomp1.component';
import { Appcomp2Component } from './appcomp2/appcomp2.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, Appcomp1Component, Appcomp2Component],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [Appcomp1Component],
})
export class AppModule {}
