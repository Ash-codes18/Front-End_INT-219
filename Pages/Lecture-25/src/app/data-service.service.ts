import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

getdata(){
  return "Chill guys, exams come and go."
}
  constructor() { }
}
