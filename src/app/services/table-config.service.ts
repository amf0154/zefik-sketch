import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableConfigService {

  gridContainer = new BehaviorSubject('');
  columnChooserActive: boolean = false;

  constructor() { }

  setGridContainer(grid: any): void {
    this.gridContainer.next(grid);
  }

  getGridContainer(): Observable<any> {
    return this.gridContainer.asObservable();
  }

  getColumnChooserVisibility(): boolean {
    return this.columnChooserActive;
}
  setColumnChooserVisibility(visible: boolean): void {
    this.columnChooserActive = visible;
  }
}
