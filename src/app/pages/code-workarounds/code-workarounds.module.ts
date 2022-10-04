import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeWorkaroundsRoutingModule } from './code-workarounds-routing.module';
import { DevexpressGridAdvancedFilterComponent } from './devexpress-grid-advanced-filter/devexpress-grid-advanced-filter.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxDateBoxModule } from 'devextreme-angular/ui/date-box';
import { DxTextBoxModule  } from 'devextreme-angular/ui/text-box';
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
