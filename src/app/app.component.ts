import { Component } from '@angular/core';
import { GitHubUser } from './interfaces/user';
import { GithubService } from './service/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Browse the coolest repositories on Github';
  users: GitHubUser[] = [];
  repos: any;

  constructor(private githubService: GithubService) { }

  getUsers() {
    this.githubService.getData().subscribe((data) => {
      console.log(data);
     this.users = data;
    });
  }

  getRepos() {
    this.githubService.getData().subscribe((data) => {
      console.log(data);
     this.repos = data;
    });
  }
}
