import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  readonly url = '/api/property'

  constructor(private http: HttpClient) { }

  public getCities(): Observable<any> {
    return this.http.get('/api/city')
  }
  public getCitiesByState(state: any): Observable<any> {
    return this.http.get('/api/city/' + state)
  }
  public getStates(): Observable<any> {
    return this.http.get('/api/state')
  }

  createProperty(property: any) {
    return this.http.post(this.url, property)
  }


  public getProperty(): Observable<any> {
    return this.http.get(this.url + '/all')
  }

  public updateProperty(id, property) {
    return this.http.put(this.url + `/${id}`, property)
  }

  public deleteProperty(id): Observable<any> {
    return this.http.delete(this.url + `/${id}`)
  }

}
