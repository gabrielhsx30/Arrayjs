function contagemFor1() {
let listaNumeros = "", numeroDaVez
const numeros = [];

for (let index = 0; index < 10; index++) {
    numeroDaVez = parseInt(prompt(`Digite o ${index + 1}° número: `));
    numeros.push(numeroDaVez);

}
 for (let index = 0; index < numeros.length; index++) {
    listaNumeros = `${listaNumeros}\n${numeros[index]}`;
 }
 alert(`Lista de Números: \n ${listaNumeros}`);
}