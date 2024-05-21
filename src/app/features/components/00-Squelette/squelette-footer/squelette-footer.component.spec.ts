import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqueletteFooterComponent } from './squelette-footer.component';

describe('SqueletteFooterComponent', () => {
  let component: SqueletteFooterComponent;
  let fixture: ComponentFixture<SqueletteFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqueletteFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SqueletteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
