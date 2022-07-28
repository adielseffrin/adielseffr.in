import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adielseffr.in';
  currentYear : number = 0;

  constructor(
    private router: Router,
    ){
    this.currentYear = (new Date()).getFullYear();
    this.router.navigate(['/linktree'])
  }
}
