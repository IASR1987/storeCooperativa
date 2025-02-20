import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CarShopService {

    private baseUrl = 'http://localhost:8080/cart';


    constructor(private http: HttpClient) {}

    addToCart(userId: number, productId: number, quantity: number, name:string, imgSrc:string): Observable<any> {
        return this.http.post(this.baseUrl+"/addCart", { userId, productId, quantity, name, imgSrc });
    }

    getDatos(): Observable<any> {
        return this.http.get(this.baseUrl+'/all');
    }

    deleteProduct(id: number): Observable<any> {
        return this.http.delete(this.baseUrl+'/deleteCartsById?id='+id);
    }

    deleteAllProductsByIdUser(id:number): Observable<any> {
        return this.http.delete(this.baseUrl+'/deleteCartsByIdUser?id='+id);
    }
}