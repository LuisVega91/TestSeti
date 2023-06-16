const MUTANT_SUBSEQUENCE = /A{4}|C{4}|G{4}|T{4}/;

export class MutantValidator {
    protected dna: string[][] = [[]];

    constructor(dna: string[][]) {
        this.dna = dna;
    }

    get rows() {
        return this.dna.map(el => el.join(''));
    }

    get columns(): string[] {
        return this.dna[0].map((_, colIndex) => {
            return this.dna.map(row => row[colIndex]).join('');
        });
    }

    get mainDiagonals(): string[] {
        return this.getDiagonalsFromMatrix(this.dna)
    }


    get secondaryDiagonals(): string[] {
        const trasposedMatrix = [...this.dna].reverse();
        return this.getDiagonalsFromMatrix(trasposedMatrix);
    }

    isMutant(): boolean {
        if (this.hasMutantSubSequenceIn(this.rows)) { return true }
        if (this.hasMutantSubSequenceIn(this.columns)) { return true }
        if (this.hasMutantSubSequenceIn(this.mainDiagonals)) { return true }
        if (this.hasMutantSubSequenceIn(this.secondaryDiagonals)) { return true }

        return false
    }


    getDiagonalsFromMatrix(matrix: string[][]): string[] {
        const diagonals: string[][] = [[], [], [], [], [], [], [], [], [], [], []]
        for (let diagonalsIndex = 0; diagonalsIndex < 11; diagonalsIndex++) {
            for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
                for (let colIndex = 0; colIndex < 6; colIndex++) {
                    if (diagonalsIndex === (rowIndex + colIndex)) {
                        diagonals[diagonalsIndex].push(matrix.at(rowIndex)?.at(colIndex) as string)
                    }
                }
            }
        }
        return diagonals.map(el => el.join(''))
    }

    hasMutantSubSequenceIn(subSequences: string[]): boolean {
        console.log({subSequences})
        return subSequences.some(subSequence => MUTANT_SUBSEQUENCE.test(subSequence))
    }
}
