import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeServiceComponent } from './groupe-service.component';

describe('GroupeServiceComponent', () => {
  let component: GroupeServiceComponent;
  let fixture: ComponentFixture<GroupeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupeServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
