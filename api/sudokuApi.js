// Importa a biblioteca axios para fazer requisições HTTP
import axios from 'axios';

// Define a URL base para a API
const BASE_URL = 'https://sua-api-aqui.com';

// Define a função assíncrona getSudokuPuzzle que recebe um parâmetro de dificuldade (string)
// e retorna uma promessa de uma matriz de números (tabuleiro do Sudoku)
export const getSudokuPuzzle = async (difficulty: string): Promise<number[][]> => {
  // Faz uma requisição GET à API usando a URL base, o caminho do recurso e o parâmetro de dificuldade
  const response = await axios.get(`${BASE_URL}/sudoku/${difficulty}`);
  
  // Retorna os dados da resposta (tabuleiro do Sudoku) como resultado da função
  return response.data;
};


// Este código define uma função assíncrona chamada "getSudokuPuzzle" que busca um 
// quebra-cabeça Sudoku de uma API, dada uma dificuldade especificada como parâmetro. 
// A função utiliza a biblioteca "axios" para fazer uma requisição GET à API e 
// retorna os dados da resposta como uma matriz bidimensional 
// de números (o tabuleiro do Sudoku).
