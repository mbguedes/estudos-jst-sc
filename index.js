import {Cliente} from "./Cliente.js"//importando a classe Cliente
import {ContaCorrente} from "./ContaCorrente.js"; //importando a classe ContaCorrente

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
contaCorrenteMarcio._saldo = 300;
contaCorrenteMarcio.agencia = 1001;

const valorSacado = contaCorrenteMarcio.sacar(50);
