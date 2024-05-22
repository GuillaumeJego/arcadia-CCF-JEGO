import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedContinentService {

  private selectedContinentSource = new BehaviorSubject<number | null>(null);
  selectedContinent$ = this.selectedContinentSource.asObservable();

  setSelectedContinent(continentId: number): void {
    this.selectedContinentSource.next(continentId);
  }
}
