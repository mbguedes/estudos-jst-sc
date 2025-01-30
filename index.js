import {ContaCorrente} from "./ContaCorrente.js"; //importando a classe ContaCorrente
import {Cliente} from "./Cliente.js"//importando a classe Cliente

const cliente1 = new Cliente("Marcio", 11122233309); //definicao dos atributos do cliente
const cliente2 = new Cliente("Amanda", 55522233309);

// console.log(cliente1);
// console.log(cliente2);

const contaCorrenteMarcio = new ContaCorrente(1013, cliente1);//definicao dos atributos da conta corrente com seu construtor 

contaCorrenteMarcio.depositar(5000);
const contaCorrenteAmanda = new ContaCorrente(5300, cliente2);//definicao dos atributos da conta corrente com seu construtor

console.log(contaCorrenteMarcio);
console.log(ContaCorrente.numeroContas); //mostra o numero de contas criadas