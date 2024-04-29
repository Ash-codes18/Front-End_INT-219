import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { style } from '@angular/animations';

@Component({
  selector: 'app-style1',
  standalone: true,
  imports: [CommonModule,Style1Component],
  templateUrl: './style1.component.html',
  styleUrl: './style1.component.css'
})
export class Style1Component {

}
