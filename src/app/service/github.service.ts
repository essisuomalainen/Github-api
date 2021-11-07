import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }


  /* getData(): Observable<any> {
    return this.http.get("https://api.github.com/search/repositories?q=stars:>=10000+&sort=stars&order=desc");
   /*  const url = 'https://api.github.com/users';
    return this.http.get<any>(url) 
  } */

  getRepos(): Observable<any> {
    const url = 'https://api.github.com/repositories';
    return this.http.get<any>(url)
  }
}
