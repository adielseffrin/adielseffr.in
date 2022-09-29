import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CurrentLocale } from '../shared/models/current-locales.enum';
//mock data
import { OngoingProjectItem } from '../shared/models/ongoing-project-item';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly basePath = "https://api.adielseffr.in/site/";
  private readonly getOngoingProjectsUrl : string = this.basePath+"ongoingProjects/:locale"

  constructor() { }

  private ongoingProjects(): Array<OngoingProjectItem>{
    let projects : Array<OngoingProjectItem> = new Array<OngoingProjectItem>();
    
    projects.push(new OngoingProjectItem({img:'capa-btg-tdc.PNG',text:'Palestra - Utilizando as redes sociais para potencializar a sua carreira e seu aprendizado - Como utilizá-las até não sendo sociável.', locale: CurrentLocale.pt}));
    
    projects.push(new OngoingProjectItem({img:'capa-btg-tdc.PNG',text:'Lecture - Using social networks to enhance your career and your learning - How to use them even if you are not sociable.', locale: CurrentLocale.en}));    
    
    return projects;
  }

  getOngoingProjects(locale: string):Observable<any>{
    return of(this.ongoingProjects().filter(x => x.locale == locale));
  }

}
