import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shared1Component } from './shared1/shared1.component';
import { Shared2Component } from './shared2/shared2.component';

@NgModule({
  declarations: [Shared1Component, Shared2Component],
  imports: [CommonModule],
  exports: [Shared1Component],
})
export class SharedModule {}
