$(document).ready(function(){
    $("#conteudo").hide();
    $("#conteudo-pesquisa").hide();
    $.ajax({url: "https://economia.awesomeapi.com.br/all"})
    .done( (data)=> {
        Object.entries(data).forEach((moeda)=> {
            $("#tipo-moeda").append(`<option>${moeda[0]}</option>`);
        })
    })

    function escrever(_data){
        $("#conteudo").show();
        $("#moedas").html(_data[0][1].name);
        $("#val-cotacao").html(_data[0][1].ask);
        $("#val-data").html(_data[0][1].create_date);
        $("#val-min").html(_data[0][1].low);
        $("#val-max").html(_data[0][1].high);
        $("#val-fechamento").html(_data[0][1].bid);
    }
    function limparTabela(){
        $("#tabela").html(`<tr><th id="titulo" colspan="5"></th></tr><tr><th>Data e Hora</th><th>Valor de Compra</th><th>Valor de Venda</th><th>Valor Máximo</th><th>Valor Mínimo</th></tr>`);
    }

    function escreverTabela(data){
        limparTabela();
        $("#conteudo-pesquisa").show();
        console.log(data);
        $("#titulo").html(data[0].name);
        let code = data[0].codein;
        data.forEach((item => {
            let dia = new Date(item.timestamp*1000).getDate();
            if(dia < 10){
                dia = "0" + dia;
            }
            let mes = new Date(item.timestamp*1000).getMonth() +1;
            if(mes < 10){
                mes = "0" + mes;
            }
            const ano = new Date(item.timestamp*1000).getFullYear();
            const hora = new Date(item.timestamp*1000).toTimeString().split("GMT")[0];
            const dataAtual = dia + "-" + mes + "-" + ano + " ÁS " + hora;
            $("#tabela").append(`<tr><td>${dataAtual}</td><td>${code} <span class="high">${item.ask}</span></td><<td>${code} <span class="low">${item.bid}</span></td><td>${code} <span class="high">${item.high}</span></td><td>${code} <span class="low">$${item.low}</span></td>`)
        }))                   
    }

    function pesquisaTipo(){
        const moeda = $("#tipo-moeda").val();
        $.ajax({url: `https://economia.awesomeapi.com.br/last/${moeda}-BRL`})
        .done((data)=> {
            console.log(data);
            const dados = Object.entries(data);
            escrever(dados);
        });
    }

    function pesquisa(){
        let dataInicio = $("#data-inicio").val().replaceAll("-", "");
        let dataFim = $("#data-final").val().replaceAll("-", "");
        const atual = new Date().toJSON().slice(0,10).replaceAll("-", "");
        const moeda = $("#tipo-moeda").val();
        if(moeda === "Moedas"){
            return false;
        }
        if(dataInicio === "" && dataFim === ""){
            alert("Insira a data inicial e final da pesquisa!");
        }
        else if(dataInicio !== "" && dataFim === ""){
            if(dataInicio > atual){
                alert("Pesquisa inválida, a data selecionada é superior a data atual!")
                return false;
            }
            $.ajax({url: `https://economia.awesomeapi.com.br/${moeda}/5000?start_date=${dataInicio}&end_date=${atual}`})
            .done((data)=> {
                escreverTabela(data);
            });
        }
        else if(dataInicio === "" && dataFim !== ""){
            const atual = new Date().toJSON().slice(0,10).replaceAll("-", "");
            if(dataFim > atual){
                alert("Pesquisa inválida, a data selecionada é superior a data atual!")
                return false;
            }
            $.ajax({url: `https://economia.awesomeapi.com.br/${moeda}/5000?start_date=${dataFim}&end_date=${dataFim}`})
            .done((data)=> {
                escreverTabela(data);
            });
        }
        else if(dataInicio !== "" && dataFim !== ""){
            if(dataFim > atual || dataInicio > atual){
                alert("Pesquisa inválida, a data selecionada é superior a data atual!")
                return false;
            }
            else{
                $.ajax({url: `https://economia.awesomeapi.com.br/${moeda}/5000?start_date=${dataInicio}&end_date=${dataFim}`})
                .done((data)=> {
                    escreverTabela(data);
                });
            }
        }
    }
    $("#tipo-moeda").on("change", pesquisaTipo);
    $("#pesquisar").on("click", pesquisa);

    
});



