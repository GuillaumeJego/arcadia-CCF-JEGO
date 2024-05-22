import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicePostedService } from '../../../../core/services/service-posted.service';

@Component({
  selector: 'app-services-posted',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './services-posted.component.html',
  styleUrl: './services-posted.component.scss'
})
export class ServicesPostedComponent {

  imageUrl = "../../../../../../assets/Images/Image boutons/Bouton navBar.png"

  services: any[] = [];

  constructor(private servicePostedService: ServicePostedService) { }

  ngOnInit(): void {
    this.servicePostedService.getServicePosted().subscribe(
      (response) => {
        this.services = response;
      },
      (error) => {
        console.error('erreur récupération des services postés:', error);
      }
    );
  }
}
