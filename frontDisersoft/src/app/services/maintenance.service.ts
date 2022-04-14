import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Maintenance } from '../interfaces/maintenance.interface';

@Injectable({
  providedIn: 'root',
})
export class MaintenanceService {
  private myAppUrl = 'https://localhost:44389/';
  private myApiUrl = 'api/Preventivo/';

  constructor(
    private http: HttpClient
  ) { }

  getListMaintenances(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteMaintenance(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  updateMaintenance(id: number, maintenance: Maintenance): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, maintenance);
  }

  postMaintenance(maintenance: Maintenance): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, maintenance);
  }

  getMaintenance(id: number): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl + id);
  }
}
