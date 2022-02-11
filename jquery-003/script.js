$(document).ready(function(){
    $("#conteudo-pesquisa").hide();
    $("#lado").hide();
    function escrever(data){
        $("#conteudo-pesquisa").fadeIn();
        $("#rua").html(data.address);
        $("#bairro").html(data.district);
        $("#cidade").html(data.city);
        $("#estado").html(data.state);
        $("#con-cep").html(data.cep);
        $("#ddd").html(data.ddd);
        $("#lat").html(data.lat);
        $("#long").html(data.lng);
        $("#map").html(`<iframe src="https://www.google.com/maps?api=1&q=${data.lat}%2C${data.lng}&hl=es;z=14&output=embed" name="iframe_a" height="400px" width="600px" title="Iframe Example"></iframe>`);
        $("#lado").fadeIn();
        $("#cep").val("");
    }
    
    function pesquisaCEP(){
        const CEP = $("#cep").val();
        if(CEP.length === 0){
            alert("Digite os números do CEP para realizar a pesquisa!");
            return false;
        }
        else if(CEP.length < 8 || CEP.length > 8){
            alert("CEP invalido, digite os 8 números do CEP. Use somente números!");
            return false;
        }
        $.ajax({url: `https://cep.awesomeapi.com.br/json/${CEP}`})
        .done((data)=> {
            console.log(data);
            escrever(data);
        })
        .fail(function(){
            alert("CEP não encontrado!");
        })
    }

    $("#pesquisar").on("click", pesquisaCEP);
});