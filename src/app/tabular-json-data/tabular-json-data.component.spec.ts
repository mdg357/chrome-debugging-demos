import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularJsonDataComponent } from './tabular-json-data.component';

describe('TabularJsonDataComponent', () => {
  let component: TabularJsonDataComponent;
  let fixture: ComponentFixture<TabularJsonDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabularJsonDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabularJsonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
