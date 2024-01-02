import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "https://localhost/api/authenticate.php"
  constructor(private http : HttpClient) { }


  authenticate (username:any, password:any):Observable<any> {
    const postData = { username, password };
    return this.http.post<any>(this.apiUrl, postData);
  }
}
