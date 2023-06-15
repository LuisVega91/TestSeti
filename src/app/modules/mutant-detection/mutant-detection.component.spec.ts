import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantDetectionComponent } from './mutant-detection.component';
import { MatButtonModule } from '@angular/material/button';

describe('MutantDetectionComponent', () => {
  let component: MutantDetectionComponent;
  let fixture: ComponentFixture<MutantDetectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutantDetectionComponent],
      imports: [MatButtonModule]

    });
    fixture = TestBed.createComponent(MutantDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
