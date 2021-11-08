import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/interfaces/repositories';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() repo: any;
  clicked: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }
  
  toggleOverlay() {
    this.clicked = !this.clicked;
  }
}
