$(document).ready(function(){

    function calculadora() {
        let operand1;
        let operand2;
        let operation;
        let valorPassado = "";
        let final = false;

        function setOperand1(_operand1){
            operand1 = _operand1;
        }
        function setOperand2(_operand2){
            operand2 = _operand2;
        }
        function setOperation(_operation){
            $("#operacao1").text(operand1);
            $("#operador").text(operation);
            operation = _operation;
        }
        function getResult(){
            setOperand2(valorPassado);
            if(operand2 === "0" && operation === "/"){
                alert("não é possivel dividir por zero!");
                return false;
            }
            operand1 = parseInt(operand1, 10);
            operand2 = parseInt(operand2, 10);
            if(operation === "+"){
                let resultado = operand1 + operand2;
                showResult(resultado);
            }
            else if(operation === "-"){
                let resultado = operand1 - operand2;
                showResult(resultado);
            }
            else if(operation === "/"){
                let resultado = operand1 / operand2;
                showResult(resultado);
            }
            else if(operation === "*"){
                let resultado = operand1 * operand2;
                showResult(resultado); 
            }

        }

        function showResult(resultado){
            $("#operacao1").text("");
            $("#operador").text("");
            $("#operacao2").text("");
            $("#operacao1").text(resultado);
            final = true;
            return resultado;
        }

        function clearCalculator(){
            operand1 = undefined;
            operand2 = undefined;
            operation = undefined;
            valorPassado = "";
            $("#operacao1").text("");
            $("#operador").text("");
            $("#operacao2").text("");
        }
        
        function getValue(num){
            if(operand1 === undefined){
                const operacao1 = valorPassado + num;
                valorPassado = operacao1;
                $("#operacao1").text(operacao1);
                return operacao1;
            }
            else if(operand1 !== undefined){
                const operacao2 = valorPassado + num;
                valorPassado = operacao2;
                $("#operacao2").text(operacao2);
                return operacao2;
            }
        }
        function setEnd(){
            final = false;
        }

        function defineStep(element){
            if(final === true){
                clearCalculator();
                setEnd();
            }
            if(element === "+" || element === "-" || element === "/" || element === "*"){
                if(operand1 === undefined && valorPassado === ""){
                    alert("adicione numeros primeiro!");
                    return false;
                }
                else if(operand1 === undefined && valorPassado !== undefined){
                    setOperand1(valorPassado);
                    setOperation(element);
                    $("#operacao1").text(operand1);
                    $("#operador").text(operation);
                    valorPassado = "";
                    return false;
                }
                else if(operand2 === undefined && valorPassado !== undefined){
                    alert("Por favor utilize o botão = para ver o resultado ou o botão C para limpar a calculadora");
                    return false;
                }
            }
            else if(element === "C"){
                clearCalculator();
            }
            else if(element === "="){
                if(operand1 === undefined && valorPassado !== undefined){
                    alert("por favor digite o primeiro valor ou utilize um operador ( como + ou - ) para continuar");
                    return false;
                }
                else if(operand2 === undefined && valorPassado === ""){
                    alert("por favor digite o segundo valor ou utilize um operador (como + ou -) para continuar");
                    return false;
                }
                getResult();
            }
            else{
                getValue(element);
            }
        }
        return{
            defineStep
        }
    }

    const calcular = calculadora();
    
    $("#bt-calculadora").on("click", e =>{
        if (e.target.matches('button')) {
            calcular.defineStep(e.target.value);
        }
    });
});



