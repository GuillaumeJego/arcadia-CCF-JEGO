import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-virtual-home-tour',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './virtual-home-tour.component.html',
  styleUrl: './virtual-home-tour.component.scss'
})
export class VirtualHomeTourComponent {

  imageUrl = "../../../../."

  continents = [
    { text: 'Afrique', imageUrl: "../../../../../assets/Images/visiteVirtuelle/Afriques animaux.png", link: '/afrique' },
    { text: 'Amérique du Nord', imageUrl:"../../../../../assets/Images/visiteVirtuelle/Amérique du Nord animaux.png", link: '/ameriqueDuNord' },
    { text: 'Amérique du Sud', imageUrl:"../../../../../assets/Images/visiteVirtuelle/Amérique du Sud animaux.png", link: '/ameriqueDuSud' },
    { text: 'Asie', imageUrl:"../../../../../assets/Images/visiteVirtuelle/Asie animaux.png", link: '/asie' },
    { text: 'Australie', imageUrl:"../../../../../assets/Images/visiteVirtuelle/Australie animaux.png", link: '/australie' },
    { text: 'Europe', imageUrl:"../../../../../assets/Images/visiteVirtuelle/Europe animaux.png", link: '/europe' },
  ];
}
