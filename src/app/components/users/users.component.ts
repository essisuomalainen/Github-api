import { Component, OnInit, Input } from '@angular/core';
import { GitHubUser } from 'src/app/interfaces/user';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
@Input() users: GitHubUser[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
