import { Injectable } from '@angular/core';
import { Elements } from '../../models/elements';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Options } from '../../models/options';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {
  uri = "http://localhost:4000/elements";
  constructor(private httpClient: HttpClient) { }

  private log(message, args){
    console.log(`[${message}]:`, args)
  }

  addElement(elAsOp: Options):Observable<Elements> {
    const element = new Elements();
    element.objectType=elAsOp.objectType;
    element.settings = {};
    elAsOp.settings.forEach(s => {
      element.settings[s.name] = s.defaultValue; 
    });

    this.log('Posting element', element);
    return this.httpClient.post<Elements>(`${this.uri}/add`, element);
  }
  

  getElements(): Observable<any> {
    return this.httpClient.get<any>(this.uri);
  }

  getEl(id: string): Observable<Elements> {
    return this.httpClient.get<Elements>(`${this.uri}/${id}`);
  }

  deleteEl(id: string): Observable<Elements> {
    this.log('Deleting element id:', id);
    return this.httpClient.delete<Elements>(`${this.uri}/delete/${id}`)
  }

  updateElement(updatedElement: Elements): Observable<Elements> {
    this.log('Updating element', updatedElement);
    return this.httpClient.put<Elements>(`${this.uri}/update/${updatedElement._id}`, updatedElement);
  }
}
