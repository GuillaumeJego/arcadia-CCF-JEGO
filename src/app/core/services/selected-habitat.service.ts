import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedHabitatService {

  private selectedHabitatSource = new BehaviorSubject<number | null>(null);
  selectedHabitat$ = this.selectedHabitatSource.asObservable();

  setSelectedHabitat(habitatId: number): void {
    this.selectedHabitatSource.next(habitatId);
  }
}
