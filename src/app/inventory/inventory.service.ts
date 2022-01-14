import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cars } from './cars.model';

@Injectable({
    providedIn: 'root'
})
export class InventoryService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    // public getCars(limit: number, offset: number, pageID: number): Observable<Cars[]> {
    //     return this.http.get<Cars[]>(`${this.apiServerUrl}/cars/${limit}/${offset}/${pageID}`);
    // }

    public getAllCars() {
        return this.http.get<Cars[]>(`${this.apiServerUrl}/cars/getAll`);
    }

    public getById(id: number) {
        return this.http.get<Cars>(`${this.apiServerUrl}/cars/${id}`);
    }

    public getTrucks() {
        return this.http.get<Cars[]>(`${this.apiServerUrl}/cars/trucks`);
    }

    public getSuvs() {
        return this.http.get<Cars[]>(`${this.apiServerUrl}/cars/suvs`);
    }

    public getSedans() {
        return this.http.get<Cars[]>(`${this.apiServerUrl}/cars/sedans`);
    }
}