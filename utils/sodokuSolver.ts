
// Função para verificar se há números duplicados em um array
export const hasDuplicates = (arr: number[]): boolean => {
  const set = new Set();
  for (const num of arr) {
    if (num !== 0 && set.has(num)) return true;
    set.add(num);
  }
  return false;
};

// Função para verificar se há números duplicados nas linhas
export const checkRows = (puzzle: number[][]): boolean => {
  for (const row of puzzle) {
    if (hasDuplicates(row)) return true;
  }
  return false;
};


// Função para verificar se há números duplicados nas colunas
export const checkCols = (puzzle: number[][]): boolean => {
  for (let col = 0; col < 9; col++) {
    const column = puzzle.map((row: number[]) => row[col]);
    if (hasDuplicates(column)) return true;
  }
  return false;
};


// Função para verificar se há números duplicados nas subgrids
export const checkSubgrids = (puzzle: number[][]): boolean => {
  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      const subgrid = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          subgrid.push(puzzle[row + i][col + j]);
        }
      }
      if (hasDuplicates(subgrid)) return true;
    }
  }
  return false;
};


// Função para verificar se o tabuleiro está completo
export const isBoardComplete = (puzzle: number[][]): boolean => {
  return puzzle.every((row: number[]) => row.every((cell: number) => cell !== 0));
};