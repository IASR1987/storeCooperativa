import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CarShopService {

    private baseUrl = 'http://localhost:8080/cart';


    constructor(private http: HttpClient) {}

    addToCart(userId: number, productId: number, quantity: number): Observable<any> {
        return this.http.post(this.baseUrl, { userId, productId, quantity });
    }

}