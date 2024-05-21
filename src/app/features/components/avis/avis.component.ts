import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-avis',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './avis.component.html',
  styleUrl: './avis.component.scss'
})
export class AvisComponent {

  imageUrl = "../../../../../../assets/Images/Image boutons/Bouton navBar.png"

  avis = [
    { title: 'Présentation du Zoo Arcadia', text: "Bienvenue au Zoo Arcadia, un écrin de biodiversité situé au cœur de la magnifique forêt de Brocéliande en Bretagne, France.Depuis sa fondation en 1960, notre zoo se consacre à la préservation et au bien-être animal tout en offrant une expérience inoubliable à nos visiteurs. Venez découvrir la beauté de la nature à travers nos habitats soigneusement reconstitués : la savane, la jungle et les marais, où réside une multitude d'espèces animales fascinantes."},
    { title: 'Nos Habitats et Animaux', text: "Au Zoo Arcadia, chaque habitat est conçu pour reproduire fidèlement l’environnement naturel de nos résidents. Explorez la savane et rencontrez nos majestueux lions et éléphants, plongez dans la jungle luxuriante abritant des singes espiègles et des oiseaux colorés, ou promenez vous dans les marais où se cachent des reptiles et des amphibiens uniques."},
    { title: 'Bien-être Animal', text: "Nous mettons un point d’honneur à garantir le bien-être de nos animaux. Une équipe de vétérinaires expérimentés veille quotidiennement à leur santé, en effectuant des contrôles rigoureux avant l'ouverture du zoo. La nourriture est soigneusement dosée selon les recommandations vétérinaires pour assurer une alimentation équilibrée."},
    { title: 'Services et Activités', text: 'Pour agrémenter votre visite, le zoo propose divers services tels que des restaurants, des visites guidées gratuites des habitats et des promenades en petit train. Chaque service est pensé pour rendre votre journée au zoo aussi agréable que possible.'},
    { title: 'Témoignages et Avis', text: 'Les visiteurs adorent le Zoo Arcadia ! Découvrez leurs témoignages et laissez votre propre avis après votre visite. Votre retour nous aide à améliorer constamment nos services et à offrir une expérience exceptionnelle à tous nos invités.'},
    { title: 'Présentation du Zoo Arcadia', text: "Le Zoo Arcadia est fier de son engagement écologique. Nous sommes entièrement autonomes en énergie, utilisant des sources renouvelables pour minimiser notre empreinte carbone. En visitant notre zoo, vous soutenez également nos efforts de conservation et de respect de l’environnement."},
  ];

}
