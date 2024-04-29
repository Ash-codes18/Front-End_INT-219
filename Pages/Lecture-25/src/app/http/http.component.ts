import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [HttpClientModule, CommonModule, HttpClient],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css'
})
export class HttpComponent implements OnInit{
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      console.log(data);
    });
  }
}
