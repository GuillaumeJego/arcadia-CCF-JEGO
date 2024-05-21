import { Component } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-squelette-header',
  standalone: true,
  imports: [
    MainMenuComponent,
    LogoComponent,
    LoginComponent
  ],
  templateUrl: './squelette-header.component.html',
  styleUrl: './squelette-header.component.scss'
})
export class SqueletteHeaderComponent {

}
