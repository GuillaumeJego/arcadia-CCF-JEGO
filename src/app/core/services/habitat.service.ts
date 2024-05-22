import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HabitatModel } from './habitat.model';

@Injectable({
  providedIn: 'root'
})
export class HabitatService {

  private getHabitatApiUrl = 'http://localhost:8888/arcadia-CCF-JEGO/API/get_habitat.php';
  private postHabitatApiUrl = 'http://localhost:8888/arcadia-CCF-JEGO/API/post_habitat.php';
  private getHabitatsByContinentApiUrl = 'http://localhost:8888/arcadia-CCF-JEGO/API/get_habitats_by_continent.php';

  constructor(private http: HttpClient) {}

  getHabitats(): Observable<HabitatModel[]> {
    return this.http.get<HabitatModel[]>(this.getHabitatApiUrl);
  }

  getHabitatsByContinent(continentId: number): Observable<HabitatModel[]> {
    return this.http.get<HabitatModel[]>(`${this.getHabitatsByContinentApiUrl}?continent_id=${continentId}`);
  }

  uploadHabitat(
    nom: string, 
    description: string,
    image: File,
    commentaire_habitat: string,
    continent_id: string, //variable à précisez plus tard
  ): Observable<any> {
    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('commentaire_habitat', commentaire_habitat);
    formData.append('continent_id', continent_id);
    return this.http.post<any>(this.postHabitatApiUrl, formData);
  }
}