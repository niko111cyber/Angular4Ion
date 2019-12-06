import { Component, OnInit, Input } from '@angular/core';
import { LibraryDTO } from 'src/app/shared-data/library-dto';
import { LibraryService } from 'src/app/services/library.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  @Input() library: LibraryDTO;

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
  }

  deleteLibrary(){
    this.libraryService.deleteLibrary(this.library.id).subscribe (
      ()      => {
        console.log('Success');
        window.location.reload();
    },
      (error) => {console.log('ERROR' + error)  ; }
      );

  }

}
