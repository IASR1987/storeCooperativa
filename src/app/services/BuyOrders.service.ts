import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BuyOrdersService {

    private baseUrl = 'http://localhost:8080/OrderBuy';


    constructor(private http: HttpClient) {}

    addOrderBuy(Total: number): Observable<any> {
        console.log("Total: " + Total);
        return this.http.post(this.baseUrl+"/addOrderBuy?Total="+Total,null);
    }

    showOrderBuy(): Observable<any> {
        return this.http.get(this.baseUrl+"/all");
    }
}