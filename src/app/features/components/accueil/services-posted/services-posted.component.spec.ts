import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPostedComponent } from './services-posted.component';

describe('ServicesPostedComponent', () => {
  let component: ServicesPostedComponent;
  let fixture: ComponentFixture<ServicesPostedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesPostedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesPostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
