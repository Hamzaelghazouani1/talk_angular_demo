import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  condition = true;

  data = [
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Doe', age: 30},
    {id: 3, name: 'Jane', age: 35},
    {id: 4, name: 'Doe', age: 40},
    {id: 5, name: 'Doe', age: 45},
  ];
  
  dataEmpty = [{}];

  switch() {
    this.condition = !this.condition;
  }
}
