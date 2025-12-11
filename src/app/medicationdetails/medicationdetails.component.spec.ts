import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationdetailsComponent } from './medicationdetails.component';

describe('MedicationdetailsComponent', () => {
  let component: MedicationdetailsComponent;
  let fixture: ComponentFixture<MedicationdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicationdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
