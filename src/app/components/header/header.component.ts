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
@Output() searchcriteria = new EventEmitter<String>();

  
  constructor() { }
  searchThis() {
    this.searchcriteria.emit(this.searchWord);
}
 /*  content: Repository[] = [];
  newArray = [];

  searchThis(data: any) {
    this.content = this.newArray;
    console.log(data);
    if (data) {
      this.content = this.content.filter((ele, i, array) => {
        let arrayelement = ele.name.toLowerCase();
        return arrayelement.includes(data);
      })
    }
    else {
      console.log(this.content)
    }
    console.log(this.content)
  } */



  ngOnInit(): void {
  }

}
