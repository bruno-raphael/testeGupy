// Dados de faturamento por estado
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  // Função para calcular o percentual de cada estado
  function calcularPercentuais(faturamento) {
    // Calculando o total de faturamento mensal
    const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    
    // Calculando o percentual de cada estado
    const percentuais = {};
    for (let estado in faturamento) {
      percentuais[estado] = (faturamento[estado] / totalFaturamento * 100).toFixed(2);
    }
    
    // Retornando os percentuais calculados
    return percentuais;
  }
  
  // Exibindo os percentuais
  const percentuais = calcularPercentuais(faturamentoPorEstado);
  console.log("Percentual de Representação por Estado:");
  for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
  }
  