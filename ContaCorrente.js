export class ContaCorrente{ //criando uma classe para a conta corrente
    agencia;
    _saldo;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
//criando um método para ~depositar~ dinheiro na conta corrente
    depositar(valor){
        if(valor > 0) return;
        
        this._saldo =+ valor;
        
    }
}