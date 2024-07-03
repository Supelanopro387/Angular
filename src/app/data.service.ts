import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement } from './periodic-element';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getElements(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>(this.jsonUrl);
  }

  saveElements(elements: PeriodicElement[]): Observable<any> {
    // Normalmente se haría un POST a un servidor, pero para este ejemplo, simulamos el guardado
    return this.http.post(this.jsonUrl, elements);
  }
}
