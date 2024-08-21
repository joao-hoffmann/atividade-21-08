const proximoAniversario = new Date('2024-10-21');

const dataAtual = new Date();

const diffTempo = proximoAniversario - dataAtual;
const diffDias = Math.ceil(diffTempo / (1000 * 60 * 60 * 24));


const formatoDataAtual = dataAtual.toISOString().split('T')[0];


const dataMais30Dias = new Date(dataAtual);
dataMais30Dias.setDate(dataAtual.getDate() + 30);
const formatoDataMais30Dias = dataMais30Dias.toISOString().split('T')[0];

console.log(`Diferença em dias entre a data atual e o próximo aniversário: ${diffDias} dias`);
console.log(`Data atual (YYYY-MM-DD): ${formatoDataAtual}`);
console.log(`Data atual + 30 dias (YYYY-MM-DD): ${formatoDataMais30Dias}`);