import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverMemoryLeaksComponent } from './discover-memory-leaks.component';

describe('DiscoverMemoryLeaksComponent', () => {
  let component: DiscoverMemoryLeaksComponent;
  let fixture: ComponentFixture<DiscoverMemoryLeaksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverMemoryLeaksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverMemoryLeaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
