import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualHomeTourComponent } from './virtual-home-tour.component';

describe('VirtualHomeTourComponent', () => {
  let component: VirtualHomeTourComponent;
  let fixture: ComponentFixture<VirtualHomeTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualHomeTourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VirtualHomeTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
