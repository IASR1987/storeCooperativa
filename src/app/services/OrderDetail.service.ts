import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class OrderDetailService {

    private baseUrl = 'http://localhost:8080/OrderDetail';


    constructor(private http: HttpClient) {}

    addOrderDetail(productId: number, quantity: number, price: number): Observable<any> {
        console.log("idProduct: addOrderDetail " + productId + " quantity: " + quantity + " price: " + price);
        return this.http.post(this.baseUrl+"/addOrderDetail?productId="+productId+"&quantity="+quantity+"&price="+price,null);
    }

    showOrderDetail(): Observable<any> {
        return this.http.get(this.baseUrl+"/all");
    }
}