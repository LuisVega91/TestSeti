import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantDetectionComponent, NITROGENOUS_BASES } from './mutant-detection.component';
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

  it('should set nitrogenousBaseSelected correctly', () => {
    component.setNitrogenousBaseSelected(NITROGENOUS_BASES.T);
    expect(component.nitrogenousBaseSelected).toBe(NITROGENOUS_BASES.T);
  });

  it('should set value correctly', () => {
    const indexCol = 1;
    const indexRow = 2;
    component.setNitrogenousBaseSelected(NITROGENOUS_BASES.C);
    component.setValue(indexCol, indexRow);
    expect(component.dna[indexCol][indexRow]).toBe(NITROGENOUS_BASES.C);
  });

  it('should return correct color by nitrogenousBase', () => {
    const colorA = component.getColorByNitrogenousBase(NITROGENOUS_BASES.A);
    const colorT = component.getColorByNitrogenousBase(NITROGENOUS_BASES.T);
    const colorG = component.getColorByNitrogenousBase(NITROGENOUS_BASES.G);
    const colorC = component.getColorByNitrogenousBase(NITROGENOUS_BASES.C);

    expect(colorA).toBe('primary');
    expect(colorT).toBe('accent');
    expect(colorG).toBe('warn');
    expect(colorC).toBe('success');
  });

  it('should validate mutant correctly', () => {
    component.dna[0] = 'A'.repeat(6).split('') as NITROGENOUS_BASES[];
    console.log(component.dna)
    component.validateMutant();
    expect(component.isMutant).toBe(true);
  });
});
