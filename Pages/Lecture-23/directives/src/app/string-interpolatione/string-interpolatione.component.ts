import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolatione',
  standalone: true,
  imports: [],
  templateUrl: './string-interpolatione.component.html',
  styleUrl: './string-interpolatione.component.css'
})
export class StringInterpolationeComponent {

  Username:string = "Halua";
  Marks:number = 25;
  ImagePath:string = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

}
