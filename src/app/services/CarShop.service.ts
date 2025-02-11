import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CarShopService {

    private baseUrl = 'http://localhost:8080';


    constructor(private http: HttpClient) {}

    getDatos(): Observable<any> {
        return this.http.get(this.baseUrl+'/product/all');
    }
}