import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
 
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    data:{
      titles: 'Home'
    },
    children:[
      {
        path: 'linktree',
        loadChildren: () => import('./pages/link-tree/link-tree.module').then(m => m.LinkTreeModule)
      },
      {
        path: 'code-workaround',
        loadChildren: () => import('./pages/code-workarounds/code-workarounds.module').then(m => m.CodeWorkaroundsModule)
      },
    ]
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }