// Importa useState do React
import React, { useState } from 'react';

// Define a interface para as propriedades do componente Cell
interface CellProps {
  value: number;
  isInitial: boolean;
}

// Define o componente funcional Cell que recebe um objeto CellProps
const Cell: React.FC<CellProps> = ({ value, isInitial }) => {
  // Define o estado currentValue e sua função de atualização setCurrentValue
  const [currentValue, setCurrentValue] = useState(value);

  // Define a função handleChange para lidar com a mudança de valor da célula
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Obtém o novo valor digitado pelo usuário e converte-o em um número
    const newValue = parseInt(event.target.value, 10) || 0;
    // Atualiza o estado currentValue com o novo valor
    setCurrentValue(newValue);
  };

  // Renderiza o componente Cell
  return (
    <input
      type="number" // Define o tipo de input como número
      min="1" // Define o valor mínimo permitido
      max="9" // Define o valor máximo permitido
      value={currentValue} // Define o valor atual do input
      onChange={handleChange} // Define a função que será chamada quando o valor do input mudar
      style={{
        width: '2rem',
        height: '2rem',
        textAlign: 'center',
        fontSize: '1.5rem',
        border: isInitial ? '1px solid black' : '1px solid gray', // Define a cor da borda com base na propriedade isInitial
        backgroundColor: isInitial ? 'lightgray' : 'white', // Define a cor de fundo com base na propriedade isInitial
      }}
      readOnly={isInitial} // Define a propriedade readOnly com base na propriedade isInitial
    />
  );
};

// Exporta o componente Cell
export default Cell;


// Este código define um componente chamado "Cell" que representa uma célula individual 
// no tabuleiro do Sudoku. Ele recebe um valor e uma propriedade "isInitial" que indica 
// se o valor é parte do tabuleiro inicial. O componente renderiza um elemento de input 
// do tipo "number" que permite ao usuário inserir um valor entre 1 e 9. A aparência da 
// célula é ajustada com base na propriedade "isInitial", e as células iniciais são somente leitura.