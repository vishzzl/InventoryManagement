// api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost/api/api.php'; // Adjust the URL based on your PHP file location

  constructor(private http: HttpClient) { }

  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
