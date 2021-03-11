const fs = require("fs");
const path = require("path");

const caminho1 = path.join(__dirname, "files", "teste1.txt");
const caminho2 = path.join(__dirname, "files", "teste2.txt");

/** 
 * Aqui a callback se caracteriza por:
 * 1) Ser uma função passada como parâmetro para outra função;
 * 2) Ser chamada pela função "pai" após o processo de leitura
 *    de um arquivo ocorrer.
*/

function callback( err, msg ) {
    // console.log(err);
    console.log(msg.toString());
}

console.log("Inicionando leitura síncrona...");
    const mensagem = fs.readFileSync( caminho2, {} );
    console.log( mensagem.toString() );
console.log("Fim da leitura síncrona...");

console.log("Inicionando leitura assíncrona...");
    fs.readFile( caminho1, {}, callback );
console.log("Fim da leitura assíncrona...");
