import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { OngoingProjectItem } from '../../../../shared/models/ongoing-project-item';
import {MatDialog} from '@angular/material/dialog';
import { CurrentLocale } from 'src/app/shared/models/current-locales.enum';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-ongoing-projects',
  templateUrl: './ongoing-projects.component.html',
  styleUrls: ['../../../../app.component.css','./ongoing-projects.component.css']
})
export class OngoingProjectsComponent implements OnInit {

  projects : Array<OngoingProjectItem> = [];

  constructor(
    public dialog: MatDialog,
    @Inject(LOCALE_ID) public locale: string,
    private _appService: AppService) { }

  ngOnInit(): void {
    this.getOngoingProjects()
  }

  getOngoingProjects(){
    this._appService.getOngoingProjects(this.locale)
    .subscribe({
      next: (v)=> this.projects = v,
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    })
  }

  openModal($event:any){
    console.log($event)
  }

}
