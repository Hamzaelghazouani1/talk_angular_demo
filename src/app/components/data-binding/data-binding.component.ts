import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  title = 'One way Data Binding';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  colSpan = 2;
  isActive = true;
  name = 'Angular';
}
