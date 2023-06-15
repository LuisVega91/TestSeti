
export function isMutan(dna: string[]): boolean {
    if ((counHotizontal(dna) + counVertical(dna) + counDiagonal(dna))>1) return true;
    return false;
}

function counHotizontal(dna: string[]){
    let cont = 0;
    dna.forEach(el => {
        el.includes('AAAA') ? cont++ : ''
        el.includes('CCCC') ? cont++ : ''
        el.includes('TTTT') ? cont++ : ''
        el.includes('GGGG') ? cont++ : ''
    })
    return cont;
}

function counVertical(dna: string[]){
    const columnStrings = [];
    const numColumns = dna[0].length;
    for (let columnIndex = 0; columnIndex < numColumns; columnIndex++) {
        const columnArray = dna.map(row => row[columnIndex]);
        const columnString = columnArray.join("");
        columnStrings.push(columnString);
    }
    console.log(columnStrings)
    return counHotizontal(columnStrings);
}

function counDiagonal(dna: string[]){
    const diagonalStrings = [];
    const numRows = dna.length;
    const numColumns = dna[0].length;

    for (let i = 0; i < numRows; i++) {
        const diagonalArray = [];
        for (let j = 0; j < numColumns; j++) {
            if (i + j < numColumns) {
                diagonalArray.push(dna[i + j][j]);
            }
        }
        const diagonalString = diagonalArray.join("");
        diagonalStrings.push(diagonalString);
    }

    for (let i = 1; i < numColumns; i++) {
        const diagonalArray = [];
        for (let j = 0; j < numRows; j++) {
            if (i + j < numRows) {
                diagonalArray.push(dna[j][i + j]);
            }
        }
        const diagonalString = diagonalArray.join(", ");
        diagonalStrings.push(diagonalString);
    }
    return counHotizontal(diagonalStrings)
}

    