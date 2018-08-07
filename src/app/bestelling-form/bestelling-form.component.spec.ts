import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestellingFormComponent } from './bestelling-form.component';

describe('BestellingFormComponent', () => {
  let component: BestellingFormComponent;
  let fixture: ComponentFixture<BestellingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestellingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestellingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


