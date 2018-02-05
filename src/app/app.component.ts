import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}