import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdmsComponent } from './sdms.component';

describe('SdmsComponent', () => {
  let component: SdmsComponent;
  let fixture: ComponentFixture<SdmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SdmsComponent]
    });
    fixture = TestBed.createComponent(SdmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
