import { Component, Inject, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentLocale } from './shared/models/current-locales.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adielseffr.in';
  currentYear : number = 0;

  loadedInPortuguese: boolean = true;

  constructor(
    private router: Router,
    @Inject(LOCALE_ID) public locale: string
    ){
    this.currentYear = (new Date()).getFullYear();
    this.router.navigate(['/linktree'])
    this.loadedInPortuguese = this.locale == CurrentLocale.pt;
  }
}
