import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceHolderService {
  _httpClient = inject(HttpClient);

  constructor() {}

  // TODO:
  getProducts(): Observable<any> {
    return this._httpClient.get('https://api.escuelajs.co/api/v1/products');
  }
}
