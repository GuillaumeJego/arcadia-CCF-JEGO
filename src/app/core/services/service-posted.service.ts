import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { servicePostedModel } from './service-posted.model';

@Injectable({
  providedIn: 'root'
})
export class ServicePostedService {

  private apiUrl = 'http://localhost:8888/arcadia-CCF-JEGO/API/get_data_servicePosted.php';

  constructor(private http: HttpClient) { }

  getServicePosted(): Observable<any> {
    return this.http.get<servicePostedModel[]>(this.apiUrl);
  }
}
