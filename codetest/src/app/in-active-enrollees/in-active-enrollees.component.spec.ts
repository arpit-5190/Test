import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InActiveEnrolleesComponent } from './in-active-enrollees.component';

describe('InActiveEnrolleesComponent', () => {
  let component: InActiveEnrolleesComponent;
  let fixture: ComponentFixture<InActiveEnrolleesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InActiveEnrolleesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InActiveEnrolleesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
