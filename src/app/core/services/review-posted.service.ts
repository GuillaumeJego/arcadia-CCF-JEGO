import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewPostedModel } from './review-posted.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewPostedService {

  private apiUrl = 'http://localhost:8888/arcadia-CCF-JEGO/API/get_data_reviewPosted.php';

  constructor(private http: HttpClient) { }

  getReviewPosted(): Observable<any> {
    return this.http.get<ReviewPostedModel[]>(this.apiUrl);
  }
}
