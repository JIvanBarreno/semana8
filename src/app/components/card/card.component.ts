import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsComponent } from '../forms/forms.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, FormsComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
