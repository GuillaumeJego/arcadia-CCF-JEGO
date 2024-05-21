import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-habitats',
  standalone: true,
  imports: [
    CommonModule,
    HabitatsComponent
  ],
  templateUrl: './habitats.component.html',
  styleUrl: './habitats.component.scss'
})
export class HabitatsComponent {

}
