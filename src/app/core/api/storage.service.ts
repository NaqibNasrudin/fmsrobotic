import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  storeToken(val: any): void {
    const token = val.data.token;
    const name = val.data.user.name;

    localStorage.setItem('user-token', token);
    localStorage.setItem('user-name', name);
  }

  getToken(): any {
    return localStorage.getItem('user-token');
  }

  getName(): any {
    return localStorage.getItem('user-name');
  }

  clear(): void {
    localStorage.clear();
  }
}
