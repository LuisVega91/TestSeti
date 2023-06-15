import { Component } from '@angular/core';
import { mutantChecker } from './mutantValidation';

export enum NITROGENOUS_BASES {
  A = 'A',
  T = 'T',
  G = 'G',
  C = 'C',
}

export const NITROGENOUS_BASES_COLOR = {
  A: 'primary',
  T: 'accent',
  G: 'warn',
  C: 'success',
}

@Component({
  selector: 'app-mutant-detection',
  templateUrl: './mutant-detection.component.html',
  styleUrls: ['./mutant-detection.component.scss']
})
export class MutantDetectionComponent {
  public mutantChecker = mutantChecker;
  public nitrogenousBasesNames = [
    NITROGENOUS_BASES.A, 
    NITROGENOUS_BASES.T, 
    NITROGENOUS_BASES.G, 
    NITROGENOUS_BASES.C
  ]
  public nitrogenousBaseSelected: NITROGENOUS_BASES = NITROGENOUS_BASES.A;
  public isMutant?: boolean;

  dna: NITROGENOUS_BASES[][] = [
    [NITROGENOUS_BASES.A, NITROGENOUS_BASES.T, NITROGENOUS_BASES.G, NITROGENOUS_BASES.C, NITROGENOUS_BASES.G, NITROGENOUS_BASES.A],
    [NITROGENOUS_BASES.C, NITROGENOUS_BASES.A, NITROGENOUS_BASES.G, NITROGENOUS_BASES.T, NITROGENOUS_BASES.G, NITROGENOUS_BASES.C],
    [NITROGENOUS_BASES.T, NITROGENOUS_BASES.T, NITROGENOUS_BASES.A, NITROGENOUS_BASES.T, NITROGENOUS_BASES.T, NITROGENOUS_BASES.T],
    [NITROGENOUS_BASES.A, NITROGENOUS_BASES.G, NITROGENOUS_BASES.A, NITROGENOUS_BASES.C, NITROGENOUS_BASES.G, NITROGENOUS_BASES.G],
    [NITROGENOUS_BASES.G, NITROGENOUS_BASES.C, NITROGENOUS_BASES.G, NITROGENOUS_BASES.T, NITROGENOUS_BASES.C, NITROGENOUS_BASES.A],
    [NITROGENOUS_BASES.T, NITROGENOUS_BASES.C, NITROGENOUS_BASES.A, NITROGENOUS_BASES.C, NITROGENOUS_BASES.T, NITROGENOUS_BASES.G],
  ] ;

  setNitrogenousBaseSelected(nitrogenousBase: NITROGENOUS_BASES){
    this.nitrogenousBaseSelected = nitrogenousBase;
  }

  setValue(indexCol: number,IndexRow: number){
    this.dna[indexCol][IndexRow] = this.nitrogenousBaseSelected ;
  }

  getColorByNitrogenousBase(nitrogenousBase: NITROGENOUS_BASES): string {
    return NITROGENOUS_BASES_COLOR[nitrogenousBase];
  }

  validateMutant(){
    this.isMutant = this.mutantChecker(this.dna.map(row => row.join('')))
  }
}
