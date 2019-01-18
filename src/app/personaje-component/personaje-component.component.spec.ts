import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeComponentComponent } from './personaje-component.component';

describe('PersonajeComponentComponent', () => {
  let component: PersonajeComponentComponent;
  let fixture: ComponentFixture<PersonajeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
