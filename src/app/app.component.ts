import { Component, VERSION } from '@angular/core';
import { App } from './app';

@Component({
  selector: 'my-App',
  template: `<h1>Hello {{app.name}} [{{app.id}}]!</h1>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //  name = 'Vishnu ';
  app = new App('vishnu', 1);
  
}
