// Importa os hooks useEffect e useState do React
import { useEffect, useState } from 'react';
// Importa o componente Board
import Board from '../components/Board';
// Importa as funções de solução de Sudoku
import {
  checkCols, checkRows, checkSubgrids,
  isBoardComplete
} from '../utils/sodokuSolver';


const Home = () => {
   // Define o estado 'puzzle' e sua função de atualização 'setPuzzle'
   const [puzzle, setPuzzle] = useState<number[][]>([]);
   // Define o estado 'message' e sua função de atualização 'setMessage'
   const [message, setMessage] = useState<string>('');

  // O hook useEffect é usado para executar efeitos colaterais após a renderização
  useEffect(() => {
    // Define o tabuleiro de sudoku estático
    const staticPuzzle: number[][] = [
      [0, 0, 0, 2, 6, 0, 7, 0, 1],
      [6, 8, 0, 0, 7, 0, 0, 9, 0],
      [1, 9, 0, 0, 0, 4, 5, 0, 0],
      [8, 2, 0, 1, 0, 0, 0, 4, 0],
      [0, 0, 4, 6, 0, 2, 9, 0, 0],
      [0, 5, 0, 0, 0, 3, 0, 2, 8],
      [0, 0, 9, 3, 0, 0, 0, 7, 4],
      [0, 4, 0, 0, 5, 0, 0, 3, 6],
      [7, 0, 3, 0, 1, 8, 0, 0, 0],
    ];

    // Atualiza o estado 'puzzle' com o tabuleiro estático
    setPuzzle(staticPuzzle);
  }, []); // A lista de dependências vazia garante que o efeito seja executado apenas uma vez
  // Função para lidar com o clique do botão "Verificar respostas"
  const handleClick = () => {
    // Verifica se há erros no tabuleiro
    if (checkRows(puzzle) || checkCols(puzzle) || checkSubgrids(puzzle)) {
      setMessage('Erro! Há números duplicados no tabuleiro.');
    } else if (isBoardComplete(puzzle)) {
      // Se o tabuleiro estiver completo e sem erros
      setMessage('Concluído!');
    } else {
      // Se o tabuleiro estiver incompleto e sem erros
      setMessage('');
    }
  };

  // Renderiza o componente Home
  return (
    <div>
      <h1>Sudoku</h1>
      {/* Renderiza o componente Board apenas se o tabuleiro tiver conteúdo */}
      {puzzle.length > 0 && <Board puzzle={puzzle} />}
      {/* Adiciona o botão "Verificar respostas" e a função handleClick */}
      <button onClick={handleClick}>Verificar respostas</button>
      {/* Exibe a mensagem para o jogador */}
      <p>{message}</p>
    </div>
  );
};

// Exporta o componente Home
export default Home;


// Este código define um componente chamado "Home" que exibe um título "Sudoku" 
// e o componente "Board" se o estado "puzzle" tiver conteúdo. O estado "puzzle" 
// é inicializado com um tabuleiro de sudoku estático, e o componente "Board" é 
// responsável por renderizar o tabuleiro de sudoku.