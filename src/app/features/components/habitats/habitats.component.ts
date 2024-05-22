import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HabitatService } from '../../../core/services/habitat.service';
import { HabitatModel } from '../../../core/services/habitat.model';
import { ContinentsComponent } from '../../../shared/continents/continents.component';
import { ContinentService } from '../../../core/services/continent.service';
import { ContinentModel } from '../../../core/services/continent.model';
import { SelectedContinentService } from '../../../core/services/selected-continent.service';

@Component({
  selector: 'app-habitats',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ContinentsComponent
  ],
  templateUrl: './habitats.component.html',
  styleUrls: ['./habitats.component.scss']
})
export class HabitatsComponent implements OnInit {

  habitats: HabitatModel[] = [];
  continents: ContinentModel[] = [];
  selectedContinentId: number | null = null;

  habitat = {
    nom: '',
    description: '',
    image: null as File | null,
    commentaire_habitat: '',
    continent_id: ''
  };

  constructor(
    private habitatService: HabitatService,
    private continentService: ContinentService,
    private selectedContinentService: SelectedContinentService
  ) {}

  ngOnInit(): void {
    this.fetchContinents();
    this.selectedContinentService.selectedContinent$.subscribe(continentId => {
      this.selectedContinentId = continentId;
      this.fetchHabitats();
    });
  }

  fetchContinents(): void {
    this.continentService.getContinents().subscribe(
      (response) => {
        this.continents = response;
      },
      (error) => {
        console.error('Erreur récupération des continents:', error);
      }
    );
  }

  fetchHabitats(): void {
    if (this.selectedContinentId !== null) {
      this.habitatService.getHabitatsByContinent(this.selectedContinentId).subscribe(
        (response) => {
          if (response && Array.isArray(response)) {
            this.habitats = response.map(habitat => ({
              ...habitat,
              imageUrl: this.createImageUrl(habitat.image)
            }));
          } else {
            console.error('Le retour est null ou n\'est pas un tableau');
          }
        },
        (error) => {
          console.error('Erreur récupération des habitats:', error);
        }
      );
    }
  }

  createImageUrl(image: string | undefined): string {
    if (!image) {
      return '';
    }
    return `data:image/jpeg;base64,${image}`;
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.resizeImage(file, 800, 800).then(resizedImage => {
        this.habitat.image = resizedImage;
      });
    }
  }

  resizeImage(file: File, maxWidth: number, maxHeight: number): Promise<File> {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img');
      const canvas = document.createElement('canvas');
      const reader = new FileReader();

      reader.onload = (event: any) => {
        img.src = event.target.result;
        img.onload = () => {
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height *= maxWidth / width));
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width *= maxHeight / height));
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);

          canvas.toBlob((blob) => {
            if (blob) {
              resolve(new File([blob], file.name, {
                type: file.type,
                lastModified: Date.now()
              }));
            } else {
              reject(new Error('Canvas is empty'));
            }
          }, file.type);
        };
      };

      reader.readAsDataURL(file);
    });
  }

  onSubmit(): void {
    if (this.habitat.nom && this.habitat.description && this.habitat.image && this.habitat.continent_id) {
      this.habitatService.uploadHabitat(
        this.habitat.nom,
        this.habitat.description,
        this.habitat.image,
        this.habitat.commentaire_habitat,
        this.habitat.continent_id
      ).subscribe(response => {
        this.fetchHabitats(); // Rafraîchir la liste des habitats après l'ajout
      }, error => {
        console.error('Erreur sur l\'ajout de l\'habitat', error);
      });
    } else {
      console.error('Tous les champs sont requis');
    }
  }
}
