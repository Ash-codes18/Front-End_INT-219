import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-if-directive',
  standalone: true,
  imports: [CommonModule,IfDirectiveComponent],
  templateUrl: './if-directive.component.html',
  styleUrl: './if-directive.component.css'
})
export class IfDirectiveComponent {
  
  isShow:boolean = true;
  toggle(){
    this.isShow = !this.isShow;
  }
  
}