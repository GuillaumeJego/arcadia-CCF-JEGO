import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceModel } from './service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private getServiceApiUrl = 'http://localhost:8888/arcadia-CCF-JEGO/API/get_service.php';
  private postServiceApiUrl = 'http://localhost:8888/arcadia-CCF-JEGO/API/post_service.php';
  private getServicesByGroupeServiceApiUrl = 'http://localhost:8888/arcadia-CCF-JEGO/API/get_services_by_groupe_service.php';

  constructor(private http: HttpClient) {}

  getServices(): Observable<ServiceModel[]> {
    return this.http.get<ServiceModel[]>(this.getServiceApiUrl);
  }

  getServicesByGroupeService(groupeServiceId: number): Observable<ServiceModel[]> {
    return this.http.get<ServiceModel[]>(`${this.getServicesByGroupeServiceApiUrl}?groupe_service_id=${groupeServiceId}`);
  }

  uploadService(
    nom: string, 
    description: string,
    image: File,
    conclusion: string,
    groupe_service_id: string, //variable à précisez plus tard
  ): Observable<any> {
    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('conclusion', conclusion);
    formData.append('groupe_service_id', groupe_service_id);
    return this.http.post<any>(this.postServiceApiUrl, formData);
  }
}
