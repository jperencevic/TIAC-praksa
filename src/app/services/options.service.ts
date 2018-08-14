import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Options } from "../../models/options";

@Injectable({
  providedIn: "root"
})
export class OptionsService {
  uri = "http://localhost:4000/options";
  currentOp: Options;

  constructor(private httpClient: HttpClient) {}

  getOptions(): Observable<any> {
    return this.httpClient.get<any>(this.uri);
  }

  getOp(id: string): Observable<Options> {
    return this.httpClient.get<Options>(`${this.uri}/${id}`);
  }
}
