import {ContaCorrente} from "./ContaCorrente.js"; //importando a classe ContaCorrente
import {Cliente} from "./Cliente.js"//importando a classe Cliente

const cliente1 = new Cliente(); //definicao dos atributos do cliente
const cliente2 = new Cliente();


//objetos cliente1 e cliente2
cliente1.nome = "Marcio";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;

cliente2.nome = "Amanda";
cliente2.cpf = 55522233309;
cliente2.rg = 123456784;

const contaCorrenteMarcio = new ContaCorrente();
contaCorrenteMarcio.agencia = 1013;
contaCorrenteMarcio.cliente = cliente1;
contaCorrenteMarcio.depositar(1000);

console.log(contaCorrenteMarcio);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 5300;

contaCorrenteMarcio.transferir(200, conta2);

console.log(conta2);
console.log(contaCorrenteMarcio);   
