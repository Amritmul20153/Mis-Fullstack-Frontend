import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plf1detailsComponent } from './plf1details.component';

describe('Plf1detailsComponent', () => {
  let component: Plf1detailsComponent;
  let fixture: ComponentFixture<Plf1detailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plf1detailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Plf1detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
