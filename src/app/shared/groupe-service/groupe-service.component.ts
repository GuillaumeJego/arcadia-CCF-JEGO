import { Component, OnInit } from '@angular/core';
import { GroupeServiceModel } from '../../core/services/groupe-service.model';
import { GroupeServiceService } from '../../core/services/groupe-service.service';
import { SelectedGroupeServiceService } from '../../core/services/selected-groupe-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-groupe-service',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './groupe-service.component.html',
  styleUrls: ['./groupe-service.component.scss']
})
export class GroupeServiceComponent implements OnInit {

  groupeServices: GroupeServiceModel[] = [];
  groupeService = {
    nom: '',
    image: null as File | null
  };

  constructor(
    private groupeServiceService: GroupeServiceService, 
    private selectedGroupeServiceService: SelectedGroupeServiceService
  ) {}

  ngOnInit(): void {
    this.fetchGroupeServices();
  }

  fetchGroupeServices(): void {
    this.groupeServiceService.getGroupeServices().subscribe(
      (response) => {
        if (response && Array.isArray(response)) {
          this.groupeServices = response.map(groupeService => ({
            ...groupeService,
            imageUrl: this.createImageUrl(groupeService.image)
          }));
        } else {
          console.error('la réponse est null ou n\'est pas un tableau');
        }
      },
      (error) => {
        console.error('erreur récupération des groupeService:', error);
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
    const file = event.target.files[0];
    if (file) {
      this.resizeImage(file, 400, 400).then(resizedImage => {
        this.groupeService.image = resizedImage;
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

  onSubmit() {
    if (this.groupeService.nom && this.groupeService.image) {
      this.groupeServiceService.uploadGroupeService(this.groupeService.nom, this.groupeService.image)
        .subscribe(response => {
          this.fetchGroupeServices(); // Rafraîchir la liste des groupeService après l'ajout
        }, error => {
          console.error('téléchargement échoué:', error);
        });
    } else {
      console.error('Nom du groupe Service et image sont requis');
    }
  }

  onSelectGroupeService(groupeServiceId: number): void {
    this.selectedGroupeServiceService.setSelectedGroupeService(groupeServiceId);
  }
}
