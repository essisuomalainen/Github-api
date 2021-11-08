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
@Output() searchcriteria = new EventEmitter<string>();

  
  constructor() { }
  searchThis() {
    this.searchcriteria.emit(this.searchWord);
}

  ngOnInit(): void {
  }

}
