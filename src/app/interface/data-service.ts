import { Observable } from "rxjs";
import { Product } from "./product";

export interface DataService {
  getProducts(): Observable<Product[]>;
  verifyId(id:string): Observable<boolean>;
  createProduct(product: Product): Observable<Product>;
  updateProduct(product: Product): Observable<Product>;
  deleteProduct(id: string): Observable<string>;

}
