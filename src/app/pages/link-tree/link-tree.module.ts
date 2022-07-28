import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkTreeRoutingModule } from './link-tree-routing.module';
import { LinkTreeComponent } from './link-tree/link-tree.component';
import { OngoingProjectsComponent } from './components/ongoing-projects/ongoing-projects.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';


@NgModule({
  declarations: [
    SocialNetworksComponent,
    OngoingProjectsComponent,
    LinkTreeComponent,
  ],
  imports: [
    CommonModule,
    LinkTreeRoutingModule,     
  ],
  exports:[
    SocialNetworksComponent,
    OngoingProjectsComponent,
    LinkTreeComponent,
  ],
  bootstrap:[LinkTreeComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LinkTreeModule { }
