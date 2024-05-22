import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContinentService } from '../../core/services/continent.service';
import { ContinentModel } from '../../core/services/continent.model';
import { MonoContinentComponent } from './mono-continent/mono-continent.component';
import { SelectedContinentService } from '../../core/services/selected-continent.service';

@Component({
  selector: 'app-continents',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MonoContinentComponent
  ],
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.scss']
})
export class ContinentsComponent implements OnInit {

  continents: ContinentModel[] = [];
  continent = {
    nom: '',
    image: null
  };

  constructor(private continentService: ContinentService, private selectedContinentService: SelectedContinentService) {}

  ngOnInit(): void {
    this.fetchContinents();
  }

  fetchContinents(): void {
    this.continentService.getContinents().subscribe(
      (response) => {
        if (response && Array.isArray(response)) {
          this.continents = response.map(continent => ({
            ...continent,
            imageUrl: this.createImageUrl(continent.image)
          }));
        } else {
          console.error('la réponse est null ou n\'est pas un tableau');
        }
      },
      (error) => {
        console.error('erreur récupération des continents:', error);
      }
    );
  }

  createImageUrl(image: string | undefined): string {
    if (!image) {
      return '';
    }
    return `data:image/jpeg;base64,${image}`;
  }

  onFileSelected(event: any) {
    this.continent.image = event.target.files[0];
  }

  onSubmit() {
    if (this.continent.nom && this.continent.image) {
      this.continentService.uploadContinent(this.continent.nom, this.continent.image)
        .subscribe(response => {
          this.fetchContinents(); // Rafraîchir la liste des continents après l'ajout
        }, error => {
          console.error('téléchargement échoué:', error);
        });
    } else {
      console.error('Nom du continent et image sont requis');
    }
  }

  onSelectContinent(continentId: number): void {
    this.selectedContinentService.setSelectedContinent(continentId);
  }
}
