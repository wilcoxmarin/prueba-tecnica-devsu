import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import { DataService } from '../interface/data-service';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements DataService {
  protected urlBase = environment.url;

  constructor(
    private httpClient: HttpClient
  ) {}
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.urlBase}`);
  }
  verifyId(id: string): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.urlBase}/verification?id=${id}`);
  }
  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.urlBase}`, product);
  }
  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.urlBase}`, product);
  }
  deleteProduct(id: string): Observable<string> {
    return this.httpClient.get<string>(`${this.urlBase}?id=${id}`);
  }



}
