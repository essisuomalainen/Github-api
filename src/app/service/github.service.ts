import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getRepos(): Observable<any> {
    const url = 'https://api.github.com/search/repositories?q=stars:>10000';
    return this.http.get<any>(url);
  }

  
  searchRepos(query: string): Observable<any> {
    const url = `https://api.github.com/search/repositories?q=${query}`;
    return this.http.get<any>(url);
  }

}
