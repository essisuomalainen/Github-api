import { Component } from '@angular/core';
import { Repository } from './interfaces/repositories';
import { GithubService } from './service/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Browse the coolest repositories on Github';
  users: any;
  newArray = [];
  repos: Repository[] = [];
  content: Repository[] = [];

  constructor(private githubService: GithubService) {
    this.getRepos();
  }

  getRepos(): void {
    this.githubService.getRepos().subscribe((data) => {
      this.content = data.items;
    });
  }

  searchRepos(query: any) {
    this.githubService.searchRepos(query).subscribe((response) => {
     this.repos = response.items;
     this.content = [...this.repos, ...this.content];
      console.log(response, 'response');
    })
  }

  searchThis(data: any) {
    if (data) {
      this.content = this.content.filter((ele, i, array) => {
        let arrayelement = ele.name.toLowerCase();
        return arrayelement.includes(data);
      });
    }
  }
}