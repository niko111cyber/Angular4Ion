import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LibraryDTO } from '../shared-data/library-dto';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  // variable searchvalue définie pour définir le sujet auquel la liste sera abonnée pour interagir avec la recherche (composant search)
  searchValue: Subject<string> = new Subject<string>();

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {  } // on peut mettre toto à la place de http

// observable
getAllLibraries(): Observable<LibraryDTO[]> {
  return this.http.get<LibraryDTO[]>('http://localhost:8080/libraries/'); // en prod on mettrait /libraries comme url
}

addLibrary(library: LibraryDTO): Observable<string> {
  return this.http.post<string>('http://localhost:8080/libraries/', library, this.httpOptions);
}

getLibrary(id: string): Observable<LibraryDTO> {
  return this.http.get<LibraryDTO>('http://localhost:8080/libraries/' + id);
}

updateLibrary(id: string , library: LibraryDTO): Observable<string> {
  return this.http.put<string>('http://localhost:8080/libraries/' + id, library, this.httpOptions);
}

deleteLibrary(id: string): Observable<any> {
  return this.http.delete<any>('http://localhost:8080/libraries/' + id);
}
}
