import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class ProductService {

  	api = 'http://127.0.0.1:8000/api/v1/product'
  	constructor(private http: HttpClient) { }

	  storeProduct(body: any): Observable<any> {

        return this.http.post(`${this.api}/add-product`, body).pipe(
            map((response) => {
                return response;
            })
        )
    }

    getAllProduct(): Observable<any> {
        return this.http.get(`${this.api}/all-product`).pipe(
            map((response) => {
                return response;
            })
        )
    }

    searchProduct(body: any): Observable<any> {
      return this.http.get(`${this.api}/search`, {params: body}).pipe(
        map((response) => {
          return response;
        })
      )
    }
}
