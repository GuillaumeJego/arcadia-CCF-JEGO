import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedGroupeServiceService {

  private selectedGroupeServiceSource = new BehaviorSubject<number | null>(null);
  selectedGroupeService$ = this.selectedGroupeServiceSource.asObservable();

  setSelectedGroupeService(groupeServiceId: number): void {
    this.selectedGroupeServiceSource.next(groupeServiceId);
  }
}
