import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adielseffr.in';
  currentYear : number = 0;

  constructor(){
    this.currentYear = (new Date()).getFullYear();
  }
}
