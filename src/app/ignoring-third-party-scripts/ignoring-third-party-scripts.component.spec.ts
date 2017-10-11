import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnoringThirdPartyScriptsComponent } from './ignoring-third-party-scripts.component';

describe('IgnoringThirdPartyScriptsComponent', () => {
  let component: IgnoringThirdPartyScriptsComponent;
  let fixture: ComponentFixture<IgnoringThirdPartyScriptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgnoringThirdPartyScriptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgnoringThirdPartyScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
