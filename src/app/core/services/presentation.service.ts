// src/app/core/services/data-test.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PresentationModel } from './presentation.model';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {

  private apiUrl = 'http://localhost:8888/arcadia-CCF-JEGO/API/get_data_presentation.php';

  constructor(private http: HttpClient) { }

  getPresentations(): Observable<any> {
    return this.http.get<PresentationModel[]>(this.apiUrl);
  }
}
