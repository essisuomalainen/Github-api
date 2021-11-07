import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-overlay-card',
  templateUrl: './repo-overlay-card.component.html',
  styleUrls: ['./repo-overlay-card.component.scss']
})
export class RepoOverlayCardComponent implements OnInit {
@Input() repo: any;
visit = 'Visit';
  constructor() { }

  ngOnInit(): void {
  }

}
