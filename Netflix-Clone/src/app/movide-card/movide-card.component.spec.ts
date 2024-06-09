import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovideCardComponent } from './movide-card.component';

describe('MovideCardComponent', () => {
  let component: MovideCardComponent;
  let fixture: ComponentFixture<MovideCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovideCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
