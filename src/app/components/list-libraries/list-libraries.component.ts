import { Component, OnInit } from '@angular/core';
import { LibraryComponent } from '../library/library.component';
import { LibraryDTO } from 'src/app/shared-data/library-dto';
import { AddressDTO } from 'src/app/shared-data/address-dto';
import { DirectorDTO } from 'src/app/shared-data/director-dto';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-list-libraries',
  templateUrl: './list-libraries.component.html',
  styleUrls: ['./list-libraries.component.scss']
})
export class ListLibrariesComponent implements OnInit {

  libraries: LibraryDTO[] = [];

  constructor(private libraryService: LibraryService) { } // on peut mettre toto à la place de libraryService

  ngOnInit() {

    this.libraryService.getAllLibraries().subscribe((libraries) => {
      this.libraries = libraries; });

    this.libraryService.searchValue.subscribe( (searchValue) => {
      console.log("Valeur cherchée " + searchValue);

      this.libraries = this.libraries.filter((lib) => {
        // if (searchValue !== null){}
        return lib.label.toLowerCase().includes(searchValue.toLowerCase());
      });

    });

  }

}
