import { Component } from '@angular/core';

@Component({
  selector: 'app-events1',
  standalone: true,
  imports: [],
  templateUrl: './events1.component.html',
  styleUrl: './events1.component.css'
})
export class Events1Component {
  clickevent(){
    console.log("Button Clicked");
  }
}
