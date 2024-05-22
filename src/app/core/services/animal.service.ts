import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimalModel } from './animal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private getAnimalApiUrl = 'http://localhost:8888/arcadia-CCF-JEGO/API/get_animal.php';
  private postAnimalApiUrl = 'http://localhost:8888/arcadia-CCF-JEGO/API/post_animal.php';
  private getAnimauxByContinentApiUrl = 'http://localhost:8888/arcadia-CCF-JEGO/API/get_animaux_by_habitat.php';

  constructor(private http: HttpClient) {}

  getAnimaux(): Observable<AnimalModel[]> {
    return this.http.get<AnimalModel[]>(this.getAnimalApiUrl);
  }

  getAnimauxByHabitat(habitatId: number): Observable<AnimalModel[]> {
    return this.http.get<AnimalModel[]>(`${this.getAnimauxByContinentApiUrl}?continent_id=${habitatId}`);
  }

  uploadAnimal(
    prenom: string, 
    etat: string,
    image: File,
    habitat_id: string, //variable à précisez plus tard
  ): Observable<any> {
    const formData = new FormData();
    formData.append('prenom', prenom);
    formData.append('etat', etat);
    formData.append('image', image);
    formData.append('habitat_id', habitat_id);
    return this.http.post<any>(this.postAnimalApiUrl, formData);
  }
}
