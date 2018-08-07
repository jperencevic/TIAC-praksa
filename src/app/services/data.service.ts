import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Data } from "../../models/data";

@Injectable({
  providedIn: "root"
})
export class DataService {
  uri = "http://localhost:4000";

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Data> {
    return this.httpClient.get<Data>(`${this.uri}/data`);
  }
}
