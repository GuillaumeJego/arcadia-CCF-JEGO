import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsPostedComponent } from './reviews-posted.component';

describe('ReviewsPostedComponent', () => {
  let component: ReviewsPostedComponent;
  let fixture: ComponentFixture<ReviewsPostedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsPostedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewsPostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
