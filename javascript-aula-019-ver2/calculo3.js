const recibos = []; //objeto que gardará as informações
let reajustado = [];

/* Calcula a quantos dias o pagamento está atrasado */
function atraso(item){
    let vencimento = new Date(item.VencimentoReal);
    let atual = new Date();
    let diferenca = atual - vencimento;
    diferenca = Math.floor(diferenca / (1000 * 3600 * 24));
    return diferenca;
}

/* Calcula o reajuste de juros dependendo se o pagamento está atrasado ou não */
function reajuste(){
    reajustado.length = 0;
    const Reajuste = recibos.map(function(item){
        let atrasado = atraso(item);
        if(atrasado > 0){
            return {
                Cliente: item.Cliente,
                Vencimento: item.Vencimento,
                VencimentoReal: item.VencimentoReal,
                Valor: item.Valor,
                Mora: 0.02,
                Juros: atrasado * 0.001,
                Total: item.Valor + item.Valor * ((atrasado * 0.001) + 0.02)
            }
        }
        else{
            return {
                Cliente: item.Cliente,
                Vencimento: item.Vencimento,
                VencimentoReal: item.VencimentoReal,
                Valor: item.Valor,
                Mora: 0,
                Juros: 0,
                Total: item.Valor
            }
        }   
    });
    reajustado = Reajuste.slice();
    Reajuste.forEach(element => {
        escreverNovo(Reajuste, element);
    });
}

/* Adiciona as informações do reajuste a tabela */
function escreverNovo(pai, element){
    let posicao = pai.indexOf(element);
    posicao = posicao + 1;
    document.getElementById("cliente" + posicao).innerHTML = element.Cliente;      
    document.getElementById("vencimento" + posicao).innerHTML = element.Vencimento;        
    document.getElementById("valor" + posicao).innerHTML = "R$" + element.Valor.toFixed(2);
    document.getElementById("mora" + posicao).innerHTML = element.Mora * 100 + "%";
    document.getElementById("juros" + posicao).innerHTML = (element.Juros * 100).toFixed(2) + "%";
    document.getElementById("total" + posicao).innerHTML = "R$" + element.Total.toFixed(2);
}

/* Limpa a tabela */
function limpar(){
    document.getElementById("nome").value = '';      
    document.getElementById("data").value = '';        
    document.getElementById("val").value = '';
}

/* Insere as informações do formulário a tabela e ao vetor de objeto recibos */
function recibo(){
    let data = new Date(document.getElementById("data").value.replace(/-/g, '\/'));
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let recibo = {
        Cliente: document.getElementById("nome").value,
        Vencimento: dia + '/' + mes + '/' + ano,
        VencimentoReal: new Date(document.getElementById("data").value),
        Valor: parseFloat(document.getElementById("val").value),
        Mora: '',
        Juros: '',
        Total: ''
    }
    recibos.push(recibo);
    limpar();
    escrever(recibos[recibos.length-1]);
}

/* Função que escreve as novas informaçẽos na tabela */
function escrever(item){
    let linha = document.createElement("tr");
    let cliente = document.createElement("td");
    cliente.id = "cliente" + recibos.length;
    let vencimento = document.createElement("td");
    vencimento.id = "vencimento" + recibos.length;
    let valor = document.createElement("td");
    valor.id = "valor" + recibos.length;
    let mora = document.createElement("td");
    mora.id = "mora" + recibos.length;
    let juros = document.createElement("td");
    juros.id = "juros" + recibos.length;
    let total = document.createElement("td");
    total.id = "total" + recibos.length;
    cliente.innerHTML = item.Cliente;
    vencimento.innerHTML = item.Vencimento;
    valor.innerHTML = "R$" + item.Valor.toFixed(2);
    mora.innerHTML = item.Mora;
    juros.innerHTML = item.Juros;
    linha.append(cliente, vencimento, valor, mora, juros, total);
    document.getElementById("tabela").appendChild(linha);
}

let tabela = false;

function limparTabela(){
    let elem = document.getElementById("tabelaTotal");
    elem.parentNode.removeChild(elem);
    let linha = document.createElement("tr");
    let tabela = document.createElement("table");
    tabela.id = "tabelaTotal";
    let cli = document.createElement("td");
    cli.innerHTML = "Cliente";
    let Val = document.createElement("td");
    Val.innerHTML = "Valor";
    linha.append(cli, Val);
    document.getElementById("separa").appendChild(tabela);
    document.getElementById("tabelaTotal").appendChild(linha);
}

function escreverTotal(pai, item){
        let linha = document.createElement("tr");
        let cliente = document.createElement("td");
        let total = document.createElement("td");
        cliente.innerHTML = item;
        total.innerHTML = "R$" + pai[item].toFixed(2);
        linha.append(cliente, total);
        document.getElementById("tabelaTotal").appendChild(linha);
}

function contagem(accumulator, valorAtual){
    const clienteCont = accumulator[valorAtual.Cliente];
    let valor = {
        Cliente: valorAtual.Cliente,
        Total: valorAtual.Total
    } 

    if(clienteCont){
        accumulator[valorAtual.Cliente] = clienteCont + valorAtual.Total;
    }
    else{
        accumulator[valorAtual.Cliente] = valor.Total;
    }
    return accumulator;
}

function sortNome(){
    const valorInicial = {};
    reajuste();
    reajustado.sort(function (x, y) {
        let a = x.Cliente.toUpperCase(),
        b = y.Cliente.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
    });
    
    reajustado.forEach(element => {
        escreverNovo(reajustado, element);
    });

    reajustado.reduce(contagem, valorInicial);
    limparTabela();
    Object.keys(valorInicial).forEach(element => {
        escreverTotal(valorInicial, element);
    });
};

function sortData(){
    const valorInicial = [];
    reajuste();
    reajustado.sort(function (x, y) {
        let a = new Date(x.VencimentoReal),
            b = new Date(y.VencimentoReal);
        return a - b;
    });

    reajustado.forEach(element => {
        escreverNovo(reajustado, element);
    });
    
    reajustado.reduce(contagem, valorInicial);
    limparTabela();
    Object.keys(valorInicial).forEach(element => {
        escreverTotal(valorInicial, element);
    });
}