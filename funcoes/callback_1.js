/**
 * Uma função callback é uma função passada como parâmetro para
 * outra função - de forma a permitir que a callback possa ser
 * "chamada de volta" pela função que a "contém" quando necessário
 * (normalmente depois que um evento em específico termine).
 * 
 * Útil em contexto de funções async.
*/

// Exemplo
const amigo = () => console.log('Amigo estou aqui...');
setInterval( amigo, 2000 );