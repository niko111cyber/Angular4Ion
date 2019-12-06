import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeLibraryComponent } from './prime-library.component';

describe('PrimeLibraryComponent', () => {
  let component: PrimeLibraryComponent;
  let fixture: ComponentFixture<PrimeLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
