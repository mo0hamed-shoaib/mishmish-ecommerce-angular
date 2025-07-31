import { inject, Injectable } from '@angular/core';
import { User } from '../user';
import { JsonPlaceHolderService } from './json-place-holder.service';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  _jsonPlaceHolderService = inject(JsonPlaceHolderService);

  getProducts(): Observable<Product[]> {
    return this._jsonPlaceHolderService.getProducts();
  }

  sessionTitle = 'First service';
  constructor() {}
}
