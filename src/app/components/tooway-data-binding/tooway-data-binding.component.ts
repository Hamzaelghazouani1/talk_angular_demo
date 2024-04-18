import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tooway-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tooway-data-binding.component.html',
  styleUrl: './tooway-data-binding.component.css'
})
export class ToowayDataBindingComponent {
  name = "Angular 17";
  nom = "";
  email = "";
  cin = "";

  callSearch($event: any) {
    this.name = $event;
  }

  sendForm() {
    console.log({
      nom: this.nom,
      email: this.email,
      cin: this.cin
    });
    
  }
}
