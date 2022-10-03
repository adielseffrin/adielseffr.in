import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeWorkaroundsRoutingModule } from './code-workarounds-routing.module';
import { DevexpressGridAdvancedFilterComponent } from './devexpress-grid-advanced-filter/devexpress-grid-advanced-filter.component';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { EmployeesService } from 'src/app/services/employee.service';


@NgModule({
  declarations: [
    DevexpressGridAdvancedFilterComponent
  ],
  imports: [
    CommonModule,
    CodeWorkaroundsRoutingModule,
    DxDataGridModule,
    DxButtonModule, 
    DxDateBoxModule,
    DxTextBoxModule,  
  ],
  providers:[
    EmployeesService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CodeWorkaroundsModule { }
