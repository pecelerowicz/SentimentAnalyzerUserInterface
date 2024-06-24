import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleComponentComponent } from './simple-component/simple-component.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sentiment-analyzer-user-interface-test';
}
