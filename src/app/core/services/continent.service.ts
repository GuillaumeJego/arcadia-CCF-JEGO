import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContinentModel } from './continent.model';

@Injectable({
  providedIn: 'root'
})
export class ContinentService {


  private getContinentApiUrl = 'http://localhost:8888/arcadia-CCF-JEGO/API/get_continent.php';
  private postContinentApiUrl = 'http://localhost:8888/arcadia-CCF-JEGO/API/post_continent.php';

  constructor(private http: HttpClient) { }

  getContinents(): Observable<ContinentModel[]> {
    return this.http.get<ContinentModel[]>(this.getContinentApiUrl);
  }

  uploadContinent(
    nom: string, 
    image: File
  ): Observable<any> {
    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('image', image);
    return this.http.post<any>(this.postContinentApiUrl, formData);
  }
}