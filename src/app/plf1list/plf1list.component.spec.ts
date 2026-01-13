import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plf1listComponent } from './plf1list.component';

describe('Plf1listComponent', () => {
  let component: Plf1listComponent;
  let fixture: ComponentFixture<Plf1listComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plf1listComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Plf1listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
