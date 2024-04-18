import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  condition = true;

  
  data = [
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Doe', age: 30},
    {id: 3, name: 'Jane', age: 35},
    {id: 4, name: 'Doe', age: 40},
    {id: 5, name: 'Doe', age: 45},
  ];
  

  switch() {
    this.condition = !this.condition;
  }
}
