import { Component, Input, OnInit } from '@angular/core';
import {  Repository } from 'src/app/interfaces/repositories';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
@Input() public data: Repository[] = [];
repositories: Repository[] = [];
public searchFilter: any = '';
  constructor() {}

  ngOnInit(): void {
  }
}
