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
         console.log(data);
         this.repos = data;
         this.content = this.repos;
       });
     }
 
   searchThis(data: any) {
     this.content = this.repos;
     console.log(this.content, 'content');
     if (data) {
       this.content = this.content.filter((ele, i, array) => {
         let arrayelement = ele.name.toLowerCase();
         return arrayelement.includes(data);
       });
     }
     else {
       console.log(this.content)
     }
     console.log(this.content)
   }

/*  async getUsers() {
   await this.githubService.getData().subscribe((data) => {
      console.log(data);
     this.users = data;
    });
  } */

}
