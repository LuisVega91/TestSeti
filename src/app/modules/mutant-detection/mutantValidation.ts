export function mutantChecker(dna: string[]): boolean {
    const n: number = dna.length;
    const sequenceLength: number = 4;


    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= n - sequenceLength; j++) {
            if (
                dna[i][j] === dna[i][j + 1] &&
                dna[i][j] === dna[i][j + 2] &&
                dna[i][j] === dna[i][j + 3]
            ) {
                return true;
            }
        }
    }


    for (let i = 0; i <= n - sequenceLength; i++) {
        for (let j = 0; j < n; j++) {
            if (
                dna[i][j] === dna[i + 1][j] &&
                dna[i][j] === dna[i + 2][j] &&
                dna[i][j] === dna[i + 3][j]
            ) {
                return true;
            }
        }
    }


    for (let i = 0; i <= n - sequenceLength; i++) {
        for (let j = 0; j <= n - sequenceLength; j++) {
            if (
                dna[i][j] === dna[i + 1][j + 1] &&
                dna[i][j] === dna[i + 2][j + 2] &&
                dna[i][j] === dna[i + 3][j + 3]
            ) {
                return true;
            }
        }
    }


    return false;
}
