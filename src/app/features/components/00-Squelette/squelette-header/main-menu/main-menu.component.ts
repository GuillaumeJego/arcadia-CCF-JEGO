import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  imageUrl = "../../../../../../assets/Images/Image boutons/Bouton navBar.png";
  imageUrlActive = "../../../../../../assets/Images/Image boutons/Bouton navBar active.png";

  menuItems = [
    { text: 'Habitats', imageUrl: this.imageUrl, activeImageUrl: this.imageUrlActive, link: '/habitats' },
    { text: 'Services', imageUrl: this.imageUrl, activeImageUrl: this.imageUrlActive, link: '/services' },
    { text: 'Animaux', imageUrl: this.imageUrl, activeImageUrl: this.imageUrlActive, link: '/animaux' },
    { text: 'Contact', imageUrl: this.imageUrl, activeImageUrl: this.imageUrlActive, link: '/contact' },
    { text: 'Gestion', imageUrl: this.imageUrl, activeImageUrl: this.imageUrlActive, link: '/gestion' }
  ];

  routeActuelle!: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.routeActuelle = (event as NavigationEnd).url;
    });
  }

  isActive(link: string): boolean {
    return this.routeActuelle === link;
  }
}
