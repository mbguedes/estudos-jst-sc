//Percebemos que podemos criar uma classe nova para a conta corrente - e ali colocar saldo e agencia.
class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente{ //criando um método para ~sacar~ dinheiro da conta corrente
    agencia;
    saldo;
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

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
contaCorrenteMarcio.saldo = 300;
contaCorrenteMarcio.agencia = 1001;



console.log(cliente1, "\n", cliente2); // impressão dos atributos dos clientes
