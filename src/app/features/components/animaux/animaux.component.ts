import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContinentsComponent } from '../../../shared/continents/continents.component';
import { HabitatsComponent } from '../habitats/habitats.component';
import { AnimalModel } from '../../../core/services/animal.model';
import { HabitatModel } from '../../../core/services/habitat.model';
import { AnimalService } from '../../../core/services/animal.service';
import { HabitatService } from '../../../core/services/habitat.service';
import { SelectedHabitatService } from '../../../core/services/selected-habitat.service';

@Component({
  selector: 'app-animaux',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HabitatsComponent
  ],
  templateUrl: './animaux.component.html',
  styleUrl: './animaux.component.scss'
})
export class AnimauxComponent implements OnInit{

  
  animaux: AnimalModel[] = [];
  habitats: HabitatModel[] = [];
  selectedHabitatId: number | null = null;

  animal = {
    prenom: '',
    etat: '',
    compteur: 0,
    image: null as File | null,
    habitat_id: ''
  };

  constructor(
    private animalService: AnimalService,
    private habitatService: HabitatService,
    private selectedHabitatService: SelectedHabitatService
  ) {}

  ngOnInit(): void {
    this.fetchHabitat();
    this.selectedHabitatService.selectedHabitat$.subscribe(habitatId => {
      this.selectedHabitatId = habitatId;
      this.fetchAnimaux();
    });
  }

  fetchHabitat(): void {
    this.habitatService.getHabitats().subscribe(
      (response) => {
        this.habitats = response;
      },
      (error) => {
        console.error('Erreur récupération des continents:', error);
      }
    );
  }

  fetchAnimaux(): void {
    if (this.selectedHabitatId !== null) {
      this.animalService.getAnimauxByHabitat(this.selectedHabitatId).subscribe(
        (response) => {
          if (response && Array.isArray(response)) {
            this.animaux = response.map(animal => ({
              ...animal,
              imageUrl: this.createImageUrl(animal.image)
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
      this.resizeImage(file, 200, 200).then(resizedImage => {
        this.animal.image = resizedImage;
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
    if (
      this.animal.prenom && 
      this.animal.etat && 
      this.animal.image && 
      this.animal.habitat_id) {
      this.animalService.uploadAnimal(
        this.animal.prenom,
        this.animal.etat,
        this.animal.image,
        this.animal.habitat_id
      ).subscribe(response => {
        this.fetchAnimaux(); // Rafraîchir la liste des animaux après l'ajout
      }, error => {
        console.error('Erreur sur l\'ajout de l\'habitat', error);
      });
    } else {
      console.error('Tous les champs sont requis');
    }
  }
}

