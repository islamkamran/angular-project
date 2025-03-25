import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: ` <main><router-outlet /></main> `,
  styles: [
    `
      // main {
      //   padding: 16px;
      // }
    `,
  ],
})
export class AppComponent {
  title = 'indus-app';
}
