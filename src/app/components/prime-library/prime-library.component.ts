import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/services/library.service';
import { LibraryDTO } from 'src/app/shared-data/library-dto';

@Component({
  selector: 'app-prime-library',
  templateUrl: './prime-library.component.html',
  styleUrls: ['./prime-library.component.scss']
})
export class PrimeLibraryComponent implements OnInit {

  libraries: LibraryDTO[] = [];
  constructor(private libraryService: LibraryService) { }

ngOnInit() {

    this.libraryService.getAllLibraries().subscribe((libraries) => {
      this.libraries = libraries; });

    this.libraryService.searchValue.subscribe( (searchValue) => {
      console.log("Valeur cherchée " + searchValue);

      this.libraries = this.libraries.filter((lib) => {
        if (searchValue !== null){
        return lib.label.toLowerCase().includes(searchValue.toLowerCase());} else {}
      });

    });

  }

}
