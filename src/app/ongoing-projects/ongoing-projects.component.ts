import { Component, OnInit } from '@angular/core';
import { OngoingProjectItem } from '../shared/models/ongoing-project-item';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-ongoing-projects',
  templateUrl: './ongoing-projects.component.html',
  styleUrls: ['../app.component.css','./ongoing-projects.component.css']
})
export class OngoingProjectsComponent implements OnInit {

  projects : Array<OngoingProjectItem> = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    let socialMediaProject = new OngoingProjectItem({img:'palestra-redes-sociais.png',text:'Palestra - Utilizando as redes sociais para potencializar a sua carreira e seu aprendizado - Como utilizá-las até não sendo sociável.'});
        
    this.projects.push(socialMediaProject);

  }

  openModal($event:any){
    console.log($event)
  }

}
