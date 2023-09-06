function DiferencaDias(data_inicio, data_fim){
    const data1 = new Date(data_inic);
    const data2 = new Date(data_fim);

    // Calcule a diferença em milissegundos
    const diferencaEmMilissegundos = Math.abs(data_fim - data_inic);

    // Converta a diferença em dias
    const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
    const diferencaEmDias = Math.floor(diferencaEmMilissegundos / umDiaEmMilissegundos);
    
    return diferencaEmDias;
}