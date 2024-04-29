import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})

export class OneComponent {
    submitForm(form:any){
      if(form.valid){
        console.log("successful creation");
      }
      else{
        console.log("Error in form");
      }
    }
}

