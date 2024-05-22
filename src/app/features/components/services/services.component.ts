import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GroupeServiceComponent } from '../../../shared/groupe-service/groupe-service.component';
import { ServiceModel } from '../../../core/services/service.model';
import { GroupeServiceModel } from '../../../core/services/groupe-service.model';
import { ServiceService } from '../../../core/services/service.service';
import { SelectedGroupeServiceService } from '../../../core/services/selected-groupe-service.service';
import { GroupeServiceService } from '../../../core/services/groupe-service.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GroupeServiceComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit{
  services: ServiceModel[] = [];
  groupeServices: GroupeServiceModel[] = [];
  selectedGroupeServiceId: number | null = null;

  service = {
    nom: '',
    description: '',
    image: null as File | null,
    conclusion: '',
    groupe_service_id: ''
  };

  constructor(
    private serviceService: ServiceService,
    private groupeServiceService: GroupeServiceService,
    private selectedGroupeServiceService: SelectedGroupeServiceService
  ) {}

  ngOnInit(): void {
    this.fetchGroupeService();
    this.selectedGroupeServiceService.selectedGroupeService$.subscribe(groupeServiceId => {
      this.selectedGroupeServiceId = groupeServiceId;
      this.fetchServices();
    });
  }

  fetchGroupeService(): void {
    this.groupeServiceService.getGroupeServices().subscribe(
      (response) => {
        this.groupeServices = response;
      },
      (error) => {
        console.error('Erreur récupération des groupes services:', error);
      }
    );
  }

  fetchServices(): void {
    if (this.selectedGroupeServiceId !== null) {
      this.serviceService.getServicesByGroupeService(this.selectedGroupeServiceId).subscribe(
        (response) => {
          if (response && Array.isArray(response)) {
            this.services = response.map(service => ({
              ...service,
              imageUrl: this.createImageUrl(service.image)
            }));
          } else {
            console.error('Le retour est null ou n\'est pas un tableau');
          }
        },
        (error) => {
          console.error('Erreur récupération des services:', error);
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
        this.service.image = resizedImage;
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
    if (this.service.nom && this.service.description && this.service.image && this.service.groupe_service_id) {
      this.serviceService.uploadService(
        this.service.nom,
        this.service.description,
        this.service.image,
        this.service.conclusion,
        this.service.groupe_service_id,
      ).subscribe(response => {
        this.fetchServices(); // Rafraîchir la liste des services après l'ajout
      }, error => {
        console.error('Erreur sur l\'ajout de l\'service', error);
      });
    } else {
      console.error('Tous les champs sont requis');
    }
  }


}
