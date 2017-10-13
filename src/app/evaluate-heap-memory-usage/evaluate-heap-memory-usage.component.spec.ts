import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateHeapMemoryUsageComponent } from './evaluate-heap-memory-usage.component';

describe('EvaluateMemoryUsageComponent', () => {
  let component: EvaluateHeapMemoryUsageComponent;
  let fixture: ComponentFixture<EvaluateHeapMemoryUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateHeapMemoryUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateMemoryUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
