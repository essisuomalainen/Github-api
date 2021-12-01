import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Repository } from 'src/app/interfaces/repositories';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title = '';
  @Input() data: Repository[] = [];
  search = 'Search';
  searchWord = '';
  query = '';
  @Output() filtercriteria = new EventEmitter<string>();
  @Output() searchcriteria = new EventEmitter<string>();


  constructor() { }
  searchThis() {
    console.log('search this')
    this.filtercriteria.emit(this.searchWord);
    console.log(this.searchWord, 'search')
  }

  searchRepo() {
    console.log('test')

    this.searchcriteria.emit(this.query);
    console.log(this.query, 'query')
  }


  ngOnInit(): void {
  }

}
