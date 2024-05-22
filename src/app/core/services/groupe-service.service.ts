import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupeServiceModel } from './groupe-service.model';

@Injectable({
  providedIn: 'root'
})
export class GroupeServiceService {



  private getGroupeServiceApiUrl = 'http://localhost:8888/arcadia-CCF-JEGO/API/get_groupe_service.php';
  private postGroupeServiceUrl = 'http://localhost:8888/arcadia-CCF-JEGO/API/post_groupe_service.php';

  constructor(private http: HttpClient) { }

  getGroupeServices(): Observable<GroupeServiceModel[]> {
    return this.http.get<GroupeServiceModel[]>(this.getGroupeServiceApiUrl);
  }

  uploadGroupeService(
    nom: string, 
    image: File
  ): Observable<any> {
    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('image', image);
    return this.http.post<any>(this.postGroupeServiceUrl, formData);
  }
}
