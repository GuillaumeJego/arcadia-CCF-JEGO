import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqueletteHeaderComponent } from './squelette-header.component';

describe('SqueletteHeaderComponent', () => {
  let component: SqueletteHeaderComponent;
  let fixture: ComponentFixture<SqueletteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqueletteHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SqueletteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
