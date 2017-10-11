import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuringOperationDurationComponent } from './measuring-operation-duration.component';

describe('MeasuringOperationDurationComponent', () => {
  let component: MeasuringOperationDurationComponent;
  let fixture: ComponentFixture<MeasuringOperationDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasuringOperationDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuringOperationDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
