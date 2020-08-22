import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcheckpointComponent } from './firstcheckpoint.component';

describe('FirstcheckpointComponent', () => {
  let component: FirstcheckpointComponent;
  let fixture: ComponentFixture<FirstcheckpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstcheckpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstcheckpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
