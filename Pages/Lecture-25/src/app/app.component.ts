import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BirthdayComponent } from './birthday/birthday.component';
import {DataServiceService} from './data-service.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BirthdayComponent,DataServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lecture-25';
  constructor(private d: DataServiceService) { }
  getdatafromservice(){
    return this.d.getdata();
  }


}
