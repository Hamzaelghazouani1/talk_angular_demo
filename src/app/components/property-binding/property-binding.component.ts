import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  title = 'One way Data Binding';
  imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4uKqMJbv0U7CiL54Z9jBykgW0mDglWOinPW_UpmNfQ&s';
  colSpan = 2;
  isActive = false;
  name = 'Angular';

  status(){
    this.isActive = !this.isActive;
  }
}
