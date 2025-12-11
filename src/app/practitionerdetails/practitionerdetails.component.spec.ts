import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerdetailsComponent } from './practitionerdetails.component';

describe('PractitionerdetailsComponent', () => {
  let component: PractitionerdetailsComponent;
  let fixture: ComponentFixture<PractitionerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractitionerdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractitionerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
