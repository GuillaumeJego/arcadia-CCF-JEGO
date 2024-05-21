import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { LoginComponent } from '../../../auth/login/login.component';

@Component({
  selector: 'app-squelette-main',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './squelette-main.component.html',
  styleUrl: './squelette-main.component.scss'
})
export class SqueletteMainComponent {

}
