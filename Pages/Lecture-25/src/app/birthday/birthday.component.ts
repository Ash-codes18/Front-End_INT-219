import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-birthday',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './birthday.component.html',
  styleUrl: './birthday.component.css'
})
export class BirthdayComponent {
birthday = new Date(1994, 11, 17);
}
