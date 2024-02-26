import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JunodService {
  private junod_app_url = 'http://localhost:8081/';
  constructor(private http: HttpClient) {}

  executeJunodCommand(command: string): Observable<JunodResult> {
    let params = new HttpParams();
    params = params.append('command', command);
    return this.http.get<JunodResult>(this.junod_app_url, { params: params });
  }
}

export class JunodResult {
  message!: string;
  result!: string;
}
