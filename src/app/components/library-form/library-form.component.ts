import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { typesValidator } from 'src/app/directives/validator.directive';
import { LibraryDTO } from 'src/app/shared-data/library-dto';
import { AddressDTO } from 'src/app/shared-data/address-dto';
import { DirectorDTO } from 'src/app/shared-data/director-dto';
import { LibraryService } from 'src/app/services/library.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-library-form',
  templateUrl: './library-form.component.html',
  styleUrls: ['./library-form.component.scss']
})
export class LibraryFormComponent implements OnInit {

  constructor(private libraryService: LibraryService, private router: Router, private route: ActivatedRoute) { }

  library: LibraryDTO;
  id: string;

libraryForm = new FormGroup({

  id:           new FormControl(''),

  label:        new FormControl(''),
  type:         new FormControl('', [ typesValidator() ]),
  firstname:    new FormControl(''),
  lastname:     new FormControl(''),
  city:         new FormControl('', [ Validators.required, Validators.minLength(4), ]),
  numberStreet: new FormControl(''),
  postalCode:   new FormControl(''),
  street:       new FormControl('')

});

get city() {return this.libraryForm.get('city'); }
get type() {return this.libraryForm.get('type'); }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    console.log(id);

    if (id && id !== undefined && id !== '') {
    this.libraryService.getLibrary(id).subscribe(library => {
    this.library = library;

    // this.libraryForm.controls['id'].setValue(this.libraryForm.id);
    // pour afficher les champs préremplis lors du chargement du formulaire
    this.libraryForm.controls['label'].setValue         (this.library.label);
    this.libraryForm.controls['type'].setValue          (this.library.type);
    this.libraryForm.controls['firstname'].setValue     (this.library.directorDTO.firstname);
    this.libraryForm.controls['lastname'].setValue      (this.library.directorDTO.lastname);
    this.libraryForm.controls['city'].setValue          (this.library.addressDTO.city);
    this.libraryForm.controls['numberStreet'].setValue  (this.library.addressDTO.numberStreet);
    this.libraryForm.controls['postalCode'].setValue    (this.library.addressDTO.postalCode);
    this.libraryForm.controls['street'].setValue        (this.library.addressDTO.street);
  });
}

  }

  onSubmit() {

    console.warn(this.libraryForm.value);

    const libraryDTO =
      new LibraryDTO(
          this.libraryForm.value.id,
          this.libraryForm.value.label,
          this.libraryForm.value.type,

            new AddressDTO(
                this.libraryForm.value.city,
                this.libraryForm.value.numberStreet,
                this.libraryForm.value.postalCode,
                this.libraryForm.value.street
                ),

              new DirectorDTO(
                  this.libraryForm.value.firstname,
                  this.libraryForm.value.lastname
          ));

    console.log(libraryDTO);

    if (libraryDTO.id !== null ) {

      this.libraryService.updateLibrary(this.id, libraryDTO).subscribe (
        ()      => {console.log('Success') ; this.router.navigate(['/liste']);},
        (error) => {console.log('ERROR' + error)  ; }
        )} else {

      this.libraryService.addLibrary(libraryDTO).subscribe (
        ()      => {console.log('Success') ; this.router.navigate(['/liste']); },
        (error) => {console.log('ERROR' + error)  ; }
        );
    }
    }

  }
