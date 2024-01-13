import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  	providedIn: 'root'
})
export class LoginService {

    api = 'http://127.0.0.1:8000/api/v1/user'
  	constructor(private http: HttpClient, private storage: StorageService) { }

    login(body: any): Observable<any> {
        return this.http.post(`${this.api}/login`, body).pipe(
            map((response) => {
                this.storage.storeToken(response);
                return response;
            })
        )
    }

    register(body: any): Observable<any> {
      return this.http.post(`${this.api}/register`, body).pipe(
        map((response) => {
          this.storage.storeToken(response);
          return response;
        })
      )
    }
}
