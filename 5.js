// Função para inverter a string
function inverterString(str) {
    let stringInvertida = '';
    
    // Iterando sobre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i]; // Adicionando cada caractere na nova string
    }
    
    return stringInvertida;
  }
  
  // Exemplo de uso
  const entrada = "Exemplo de String"; // Pode ser alterado para qualquer string de sua preferência
  const resultado = inverterString(entrada);
  
  console.log("String original: " + entrada);
  console.log("String invertida: " + resultado);
  