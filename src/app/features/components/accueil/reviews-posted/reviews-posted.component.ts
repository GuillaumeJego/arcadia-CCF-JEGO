import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReviewPostedService } from '../../../../core/services/review-posted.service';

@Component({
  selector: 'app-reviews-posted',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './reviews-posted.component.html',
  styleUrl: './reviews-posted.component.scss'
})
export class ReviewsPostedComponent {
  imageUrl = "../../../../../../assets/Images/Image boutons/Bouton navBar.png"

  avis: any[] = [];

  constructor(private reviewPostedService: ReviewPostedService) { }

  ngOnInit(): void {
    this.reviewPostedService.getReviewPosted().subscribe(
      (response) => {
        this.avis = response;
      },
      (error) => {
        console.error('erreur récupération des avis postés:', error);
      }
    );
  }
}
