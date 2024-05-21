import { Component } from '@angular/core';
import { MonoContinentComponent } from './mono-continent/mono-continent.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-continents',
  standalone: true,
  imports: [
    CommonModule,
    MonoContinentComponent
  ],
  templateUrl: './continents.component.html',
  styleUrl: './continents.component.scss'
})
export class ContinentsComponent {
  imageUrl = "../../../../../../assets/Images/Image boutons/Bouton navBar.png"

  continents = [
    { text: 'Afrique', imageUrl: "../../../../../../assets/Images/mapMonde/AFRIQUE.png", link: '/afrique' },
    { text: 'Amérique du Nord', imageUrl:"../../../../../../assets/Images/mapMonde/AMERIQUE DU NORD.png", link: '/ameriqueDuNord' },
    { text: 'Amérique du Sud', imageUrl:"../../../../../../assets/Images/mapMonde/AMERIQUE DU SUD.png", link: '/ameriqueDuSud' },
    { text: 'Asie', imageUrl:"../../../../../../assets/Images/mapMonde/ASIE.png", link: '/asie' },
    { text: 'Australie', imageUrl:"../../../../../../assets/Images/mapMonde/AUSTRALIE.png", link: '/australie' },
    { text: 'Europe', imageUrl:"../../../../../../assets/Images/mapMonde/EUROPE.png", link: '/europe' },
  ];
}
