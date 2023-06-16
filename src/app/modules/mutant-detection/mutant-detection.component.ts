import { Component } from '@angular/core';
import { MutantValidator } from './mutant-validator';

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

const defaultDna = [
  [NITROGENOUS_BASES.A, NITROGENOUS_BASES.T, NITROGENOUS_BASES.G, NITROGENOUS_BASES.C, NITROGENOUS_BASES.G, NITROGENOUS_BASES.A],
  [NITROGENOUS_BASES.C, NITROGENOUS_BASES.A, NITROGENOUS_BASES.G, NITROGENOUS_BASES.T, NITROGENOUS_BASES.G, NITROGENOUS_BASES.C],
  [NITROGENOUS_BASES.T, NITROGENOUS_BASES.T, NITROGENOUS_BASES.A, NITROGENOUS_BASES.T, NITROGENOUS_BASES.T, NITROGENOUS_BASES.T],
  [NITROGENOUS_BASES.A, NITROGENOUS_BASES.G, NITROGENOUS_BASES.A, NITROGENOUS_BASES.C, NITROGENOUS_BASES.G, NITROGENOUS_BASES.G],
  [NITROGENOUS_BASES.G, NITROGENOUS_BASES.C, NITROGENOUS_BASES.G, NITROGENOUS_BASES.T, NITROGENOUS_BASES.C, NITROGENOUS_BASES.A],
  [NITROGENOUS_BASES.T, NITROGENOUS_BASES.C, NITROGENOUS_BASES.A, NITROGENOUS_BASES.C, NITROGENOUS_BASES.T, NITROGENOUS_BASES.G],
]

@Component({
  selector: 'app-mutant-detection',
  templateUrl: './mutant-detection.component.html',
  styleUrls: ['./mutant-detection.component.scss']
})
export class MutantDetectionComponent {
  public nitrogenousBasesNames = [
    NITROGENOUS_BASES.A, 
    NITROGENOUS_BASES.T, 
    NITROGENOUS_BASES.G, 
    NITROGENOUS_BASES.C
  ]
  public nitrogenousBaseSelected: NITROGENOUS_BASES = NITROGENOUS_BASES.A;
  public isMutant?: boolean;

  dna: NITROGENOUS_BASES[][] = [...defaultDna.map(nitrogenousBase => [...nitrogenousBase])];

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
    this.isMutant = new MutantValidator(this.dna).isMutant();
  }

  resetDna(){
    this.dna = [...defaultDna.map(nitrogenousBase => [...nitrogenousBase])];
    this.validateMutant();
  }
}
