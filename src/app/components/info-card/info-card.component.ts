import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/interfaces/repositories';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() repo: any;
  avatar = "";
  url = "";
  clicked: boolean = false;

  constructor() { 
   
  }

  ngOnInit(): void {
    this.url = this.repo.archieve_url;
    this.avatar = this.repo.owner.avatar_url;
  }
  toggleOverlay() {
    this.clicked = !this.clicked;
  }

  getUrl() {
    return '({{this.repo.owner.avatar_url}})';
  }
}
