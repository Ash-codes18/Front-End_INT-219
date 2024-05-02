import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './new/new.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lecture-26';
}
