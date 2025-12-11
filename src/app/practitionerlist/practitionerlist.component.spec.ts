import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerlistComponent } from './practitionerlist.component';

describe('PractitionerlistComponent', () => {
  let component: PractitionerlistComponent;
  let fixture: ComponentFixture<PractitionerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractitionerlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractitionerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
