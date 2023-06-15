import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantDetectionComponent } from './mutant-detection.component';

describe('MutantDetectionComponent', () => {
  let component: MutantDetectionComponent;
  let fixture: ComponentFixture<MutantDetectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutantDetectionComponent]
    });
    fixture = TestBed.createComponent(MutantDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
