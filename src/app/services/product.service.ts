import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Product } from 'src/app/models/product'
import { Observable } from 'rxjs';

const apiURL ='http://localhost:3000/comics';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(apiURL);
  }
}
