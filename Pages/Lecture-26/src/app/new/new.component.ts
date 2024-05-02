import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {
  httpClient = inject(HttpClient);

  public data: Array<any> = [];
  ngOnInit() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos').subscribe({
      next:(data: any) => {
      console.log(data);
      this.data = data;
      }, error:(err) => console.log(err)
    });
  }
 

}
