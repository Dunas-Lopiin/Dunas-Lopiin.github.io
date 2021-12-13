const recibos = [];
function atraso(item){
    let vencimento = new Date(item.VencimentoReal);
    let atual = new Date();
    let diferenca = atual - vencimento;
    diferenca = Math.floor(diferenca / (1000 * 3600 * 24));
    return diferenca;
}

function reajuste(item){
    const Reajuste = recibos.map(function(item){
        let atrasado = atraso(item);
        if(atrasado > 0){
            return {
                Cliente : item.Cliente,
                Vencimento: item.Vencimento,
                Valor: item.Valor,
                Mora: 0.02,
                Juros: atrasado * 0.001,
                Total: item.Valor + item.Valor * ((atrasado * 0.001) + 0.02)
            }
        }
        else{
            return {
                Cliente : item.Cliente,
                Vencimento: item.Vencimento,
                Valor: item.Valor,
                Mora: 0,
                Juros: 0,
                Total: item.Valor
            }
        }   
    });
    let recibosReajuste = Reajuste;
    recibosReajuste.forEach(element => {
        escreverNovo(recibosReajuste, element);
    });
    
    //document.getElementById("mora" + recibosReajuste.length).innerHTML = parseFloat(recibosReajuste.Juros) * 100 + "%";
    console.log(recibosReajuste);
}

function escreverNovo(pai, element){
    let posicao = pai.indexOf(element);
    posicao = posicao + 1;
    document.getElementById("mora" + posicao).innerHTML = element.Mora * 100 + "%";
    document.getElementById("juros" + posicao).innerHTML = (element.Juros * 100).toFixed(2) + "%";
    document.getElementById("total" + posicao).innerHTML = "R$" + element.Total.toFixed(2);
}

function limpar(){
    document.getElementById("nome").value = '';      
    document.getElementById("data").value = '';        
    document.getElementById("valor").value = '';
}



function recibo(){
    let data = new Date(document.getElementById("data").value.replace(/-/g, '\/'));
    console.log(data);
    let dia = String(data.getDate()).padStart(2, '0');
    console.log(dia);
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let recibo = {
        Cliente: document.getElementById("nome").value,
        Vencimento: dia + '/' + mes + '/' + ano,
        VencimentoReal: document.getElementById("data").value,
        Valor: parseFloat(document.getElementById("valor").value),
        Mora: '',
        Juros: '',
        Total: ''
    }
    recibos.push(recibo);
    limpar();
    escrever(recibos[recibos.length-1]);
    console.log(recibos);
}

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