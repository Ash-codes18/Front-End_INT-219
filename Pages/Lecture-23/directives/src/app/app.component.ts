import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Style1Component } from './style1/style1.component';
import { IfDirectiveComponent } from './if-directive/if-directive.component';
import { StringInterpolationeComponent } from './string-interpolatione/string-interpolatione.component';
import { Events1Component } from './events1/events1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,Style1Component,IfDirectiveComponent,StringInterpolationeComponent,Events1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives';
}
