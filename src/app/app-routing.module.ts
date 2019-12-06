import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListLibrariesComponent } from './components/list-libraries/list-libraries.component';
import { LibraryFormComponent } from './components/library-form/library-form.component';
import { PrimeLibraryComponent } from './components/prime-library/prime-library.component';


const routes: Routes = [

  //{ path: 'liste',      component: ListLibrariesComponent },
  { path: 'liste',      component: PrimeLibraryComponent },
  { path: 'nouveau',    component: LibraryFormComponent },
  { path: '', redirectTo: '/liste', pathMatch: 'full' },

  { path: 'modifier/:id', component: LibraryFormComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
