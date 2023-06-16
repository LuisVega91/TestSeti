import { MutantValidator } from './mutant-validator';

describe('MutantValidator', () => {
  let validator: MutantValidator;

  beforeEach(() => {
    validator = new MutantValidator([
      ['A', 'T', 'G', 'C', 'A'],
      ['C', 'A', 'G', 'T', 'G'],
      ['T', 'T', 'A', 'T', 'G'],
      ['A', 'G', 'A', 'A', 'G'],
      ['C', 'C', 'C', 'C', 'T']
    ]);
  });

  it('should create', () => {
    expect(validator).toBeTruthy();
  });

  it('should return true when there is a mutant subsequence in rows', () => {
    spyOn(validator, 'hasMutantSubSequenceIn').and.returnValue(true);
    expect(validator.isMutant()).toBeTruthy();
    expect(validator.hasMutantSubSequenceIn).toHaveBeenCalled();
  });

  it('should return true when there is a mutant subsequence in columns', () => {
    spyOn(validator, 'hasMutantSubSequenceIn').and.returnValue(true);
    expect(validator.isMutant()).toBeTruthy();
    expect(validator.hasMutantSubSequenceIn).toHaveBeenCalled();
  });

  it('should return true when there is a mutant subsequence in main diagonals', () => {
    spyOn(validator, 'hasMutantSubSequenceIn').and.returnValue(true);
    expect(validator.isMutant()).toBeTruthy();
    expect(validator.hasMutantSubSequenceIn).toHaveBeenCalled();
  });

  it('should return true when there is a mutant subsequence in secondary diagonals', () => {
    spyOn(validator, 'hasMutantSubSequenceIn').and.returnValue(true);
    expect(validator.isMutant()).toBeTruthy();
    expect(validator.hasMutantSubSequenceIn).toHaveBeenCalled();
  });

  it('should return false when there is no mutant subsequence', () => {
    spyOn(validator, 'hasMutantSubSequenceIn').and.returnValue(false);
    expect(validator.isMutant()).toBeFalsy();
    expect(validator.hasMutantSubSequenceIn).toHaveBeenCalled();
  });
});