import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

request: string;


  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
  }

  launch(){
    this.libraryService.searchValue.next(this.request); //
    console.log("Message envoyé au subjet " + this.request);
  }

}
