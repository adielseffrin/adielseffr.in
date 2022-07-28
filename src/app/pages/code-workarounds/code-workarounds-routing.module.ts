import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevexpressGridAdvancedFilterComponent } from './devexpress-grid-advanced-filter/devexpress-grid-advanced-filter.component';

const routes: Routes = [
  {path: 'devexpress-grid-advanced-filter', component: DevexpressGridAdvancedFilterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeWorkaroundsRoutingModule { }