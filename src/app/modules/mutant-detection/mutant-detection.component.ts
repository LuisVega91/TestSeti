import { Component } from '@angular/core';
import { isMutant } from './mutantValidation';

enum NitrogenousBase {
  A = 'A',
  T = 'T',
  G = 'G',
  C = 'C',
  NONE = 'NONE'
}

@Component({
  selector: 'app-mutant-detection',
  templateUrl: './mutant-detection.component.html',
  styleUrls: ['./mutant-detection.component.scss']
})
export class MutantDetectionComponent {
  NitrogenousBase = NitrogenousBase
  nitrogenousBaseSelected: NitrogenousBase = NitrogenousBase.A;
  isMutan?: boolean;

  matrix: NitrogenousBase[][] = [
    [NitrogenousBase.A, NitrogenousBase.T, NitrogenousBase.G, NitrogenousBase.C, NitrogenousBase.G, NitrogenousBase.A],
    [NitrogenousBase.C, NitrogenousBase.A, NitrogenousBase.G, NitrogenousBase.T, NitrogenousBase.G, NitrogenousBase.C],
    [NitrogenousBase.T, NitrogenousBase.T, NitrogenousBase.A, NitrogenousBase.T, NitrogenousBase.T, NitrogenousBase.T],
    [NitrogenousBase.A, NitrogenousBase.G, NitrogenousBase.A, NitrogenousBase.C, NitrogenousBase.G, NitrogenousBase.G],
    [NitrogenousBase.G, NitrogenousBase.C, NitrogenousBase.G, NitrogenousBase.T, NitrogenousBase.C, NitrogenousBase.A],
    [NitrogenousBase.T, NitrogenousBase.C, NitrogenousBase.A, NitrogenousBase.C, NitrogenousBase.T, NitrogenousBase.G],
  ] ;

  setNitrogenousBaseSelected(nitrogenousBase: NitrogenousBase){
    this.nitrogenousBaseSelected = nitrogenousBase;
  }

  setValue(indexCol: number,IndexRow: number){
    this.matrix[indexCol][IndexRow] = this.nitrogenousBaseSelected ;
  }

  getColorByNitrogenousBase(NitrogenousBase: NitrogenousBase): string {
    const colorsByNitrogenousBase = {
      A: 'primary',
      T: 'accent',
      G: 'warn',
      C: 'success',
      NONE: ''
    }
    return colorsByNitrogenousBase[NitrogenousBase];
  }

  validateMutant(){
    this.isMutan = isMutant(this.matrix.map(row => row.join('')))
  }
}
