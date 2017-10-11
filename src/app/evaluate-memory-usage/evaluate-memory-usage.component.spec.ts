import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateMemoryUsageComponent } from './evaluate-memory-usage.component';

describe('EvaluateMemoryUsageComponent', () => {
  let component: EvaluateMemoryUsageComponent;
  let fixture: ComponentFixture<EvaluateMemoryUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateMemoryUsageComponent ]
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
