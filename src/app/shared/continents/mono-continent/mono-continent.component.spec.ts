import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonoContinentComponent } from './mono-continent.component';

describe('MonoContinentComponent', () => {
  let component: MonoContinentComponent;
  let fixture: ComponentFixture<MonoContinentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonoContinentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonoContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
