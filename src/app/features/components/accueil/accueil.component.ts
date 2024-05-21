import { Component } from '@angular/core';
import { ContinentsComponent } from '../../../shared/continents/continents.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ReviewsPostedComponent } from './reviews-posted/reviews-posted.component';
import { VirtualHomeTourComponent } from './virtual-home-tour/virtual-home-tour.component';
import { ServicesPostedComponent } from './services-posted/services-posted.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    ContinentsComponent,
    PresentationComponent,
    ReviewsPostedComponent,
    ServicesPostedComponent,
    VirtualHomeTourComponent
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}
