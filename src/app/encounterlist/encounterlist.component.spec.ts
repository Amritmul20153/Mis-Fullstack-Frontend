import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterlistComponent } from './encounterlist.component';

describe('EncounterlistComponent', () => {
  let component: EncounterlistComponent;
  let fixture: ComponentFixture<EncounterlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncounterlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
