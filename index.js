//criacao de uma classe para cliente
class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente(); //definicao dos atributos do cliente
const cliente2 = new Cliente();
//objetos cliente1 e cliente2
cliente1.nome = "Marcio";
cliente1.cpf = 11122233309;
cliente1.agencia = 5300;
cliente1.saldo = 0;
cliente1.rg = 123456789;

cliente2.nome = "Amanda";
cliente2.cpf = 55522233309;
cliente2.agencia = 5300;
cliente2.saldo = 0;
cliente2.rg = 123456784;

console.log(cliente1, "\n", cliente2); // impressão dos atributos dos clientes
