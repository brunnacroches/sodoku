// Importa o React e o componente Cell
import React from 'react';
import Cell from './Cell';

// Define a interface para as propriedades do componente Board
interface BoardProps {
  puzzle: number[][];
}

// Define o componente funcional Board que recebe um objeto BoardProps
const Board: React.FC<BoardProps> = ({ puzzle }) => {
  // Renderiza o componente Board
  return (
    <div
      style={{
        display: 'grid', // Define o tipo de exibição como grid
        gridTemplateRows: `repeat(9, 1fr)`, // Define 9 linhas com larguras iguais
        gridTemplateColumns: `repeat(9, 1fr)`, // Define 9 colunas com alturas iguais
        gap: '1px', // Define o espaçamento entre as células
        border: '1px solid black', // Define a borda ao redor do tabuleiro
        maxWidth: '18rem', // Define a largura máxima do tabuleiro
        maxHeight: '18rem', // Define a altura máxima do tabuleiro
      }}
    >
      {/* Mapeia cada linha do tabuleiro */}
      {puzzle.map((row, rowIndex) => (
        // Mapeia cada valor na linha
        row.map((value, colIndex) => (
          // Renderiza o componente Cell com as propriedades correspondentes
          <Cell
            key={`${rowIndex}-${colIndex}`} // Define uma chave única para cada célula
            value={value} // Define o valor da célula
            isInitial={value !== 0} // Define se o valor é parte do tabuleiro inicial
          />
        ))
      ))}
    </div>
  );
};

// Exporta o componente Board
export default Board;



// Este código define um componente chamado "Board" que representa o tabuleiro 
// do Sudoku. Ele recebe um array bidimensional de números chamado "puzzle" como 
// propriedade e renderiza um componente "Cell" para cada valor no tabuleiro. 
// O componente "Board" utiliza CSS Grid para organizar as células em uma grade 9x9 e 
// aplica estilos para definir o tamanho, bordas e espaçamento do tabuleiro.