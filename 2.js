function verificarFibonacci(num) {
    let fib1 = 0;
    let fib2 = 1;
    
    // Caso o número seja 0 ou 1, ele pertence à sequência de Fibonacci
    if (num === fib1 || num === fib2) {
      return `${num} pertence à sequência de Fibonacci.`;
    }
  
    // Gerar a sequência de fibonacci e verificar se o número informado está nela
    while (fib2 < num) {
      let temp = fib2;
      fib2 = fib1 + fib2;
      fib1 = temp;
    }
  
    if (fib2 === num) {
      return `${num} pertence à sequência de Fibonacci.`;
    } else {
      return `${num} NÃO pertence à sequência de Fibonacci.`;
    }
  }
  
  // Exemplo de uso:
  let numero = 21; // Você pode alterar esse valor para testar outros números
  console.log(verificarFibonacci(numero));
  