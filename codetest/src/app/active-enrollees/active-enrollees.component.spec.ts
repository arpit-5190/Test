import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEnrolleesComponent } from './active-enrollees.component';

describe('ActiveEnrolleesComponent', () => {
  let component: ActiveEnrolleesComponent;
  let fixture: ComponentFixture<ActiveEnrolleesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveEnrolleesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveEnrolleesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
