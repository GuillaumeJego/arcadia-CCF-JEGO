
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PresentationService } from '../../../../core/services/presentation.service';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  imageUrl = "../../../../../../assets/Images/Image boutons/Bouton navBar.png";
  descriptions: any[] = [];

  constructor(private presentationService: PresentationService) { }

  ngOnInit(): void {
    this.presentationService.getPresentations().subscribe(
      (response) => {
        this.descriptions = response;
      },
      (error) => {
        console.error('erreur récupération presentation:', error);
      }
    );
  }
}
