import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqueletteMainComponent } from './squelette-main.component';

describe('SqueletteMainComponent', () => {
  let component: SqueletteMainComponent;
  let fixture: ComponentFixture<SqueletteMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqueletteMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SqueletteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
