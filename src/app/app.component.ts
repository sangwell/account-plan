import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppComponent {
  days = [
    {
      index: 1,
      name: '1'
    },
    {
      index: 1,
      name: '1'
    },
    {
      index: 1,
      name: '1'
    },
    {
      index: 1,
      name: '1'
    }
  ];
}
