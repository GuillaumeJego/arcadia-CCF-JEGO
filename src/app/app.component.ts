import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SqueletteHeaderComponent } from './features/components/00-Squelette/squelette-header/squelette-header.component';
import { SqueletteMainComponent } from './features/components/00-Squelette/squelette-main/squelette-main.component';
import { SqueletteFooterComponent } from './features/components/00-Squelette/squelette-footer/squelette-footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule, 
    RouterOutlet,
    HttpClientModule,
    SqueletteHeaderComponent,
    SqueletteMainComponent,
    SqueletteFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'arcadia';
}
