import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLivroComponent } from './form-livro.component';

describe('FormLivroComponent', () => {
  let component: FormLivroComponent;
  let fixture: ComponentFixture<FormLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
