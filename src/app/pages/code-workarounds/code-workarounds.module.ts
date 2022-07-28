import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeWorkaroundsRoutingModule } from './code-workarounds-routing.module';
import { DevexpressGridAdvancedFilterComponent } from './devexpress-grid-advanced-filter/devexpress-grid-advanced-filter.component';


@NgModule({
  declarations: [
    DevexpressGridAdvancedFilterComponent
  ],
  imports: [
    CommonModule,
    CodeWorkaroundsRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CodeWorkaroundsModule { }
