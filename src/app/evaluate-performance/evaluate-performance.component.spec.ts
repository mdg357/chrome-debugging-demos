import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatePerformanceComponent } from './evaluate-performance.component';

describe('EvaluatePerformanceComponent', () => {
  let component: EvaluatePerformanceComponent;
  let fixture: ComponentFixture<EvaluatePerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluatePerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
