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
      this.repos = data.items;
      this.content = this.repos;
    });
  }

  searchThis(data: any) {
    this.content = this.repos;
    if (data) {
      this.content = this.content.filter((ele, i, array) => {
        let arrayelement = ele.name.toLowerCase();
        return arrayelement.includes(data);
      });
    }
  }
}