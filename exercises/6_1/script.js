const States = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
const estado = document.getElementById("estado");
const formValida = document.getElementById("valida-form");

for (let i = 0; i < States.length; i += 1) {
    var option = document.createElement('option');
    estado.appendChild(option);
    option.innerHTML = States[i];
}

function validaForm(e) {
    e.preventDefault();
}
formValida.addEventListener('click', validaForm);


$(document).ready(function () {
    $("#cpf").mask("000.000.000-00")
    $("#cep").mask("00.000-000")
    $("#celular").mask("(00) 0000-00009")
    $("#celular").blur(function (event) {
        if ($(this).val().length == 15) {
            $("#celular").mask("(00) 00000-0009")
        } else {
            $("#celular").mask("(00) 0000-00009")
        }
    })
    var options = {
        translation: {
            'a': {
                pattern: /[a-zA-Z]/
            },
            'S': {
                pattern: /[a-zA-Z0-9]/
            },
        }
    }
    $("#placa").mask("aaa-0S00", options)
    $("#salario").mask("999.999.990,00", {
        reverse: true
    })

})






/*function validaMail() {
    if (chkEmail.value.indexOf("@", 0) < 0 || chkEmail.value.indexOf(".", 0) < 0) { //Checa se está preenchido certo o campo email   
        alert("Digite um endereço de e-mail válido."); //Se não estiver, dá a mensagem de erro entre aspas   
        return false; //E então retorna falso   
    } else //Caso esteja tudo certo...   
        return true; //Retorna Verdadeiro e o formulário é submetido;   
}

       $("#telefone").mask("(00) 0000-0000")
       $("#dataNascimento").mask("00/00/0000")
    $("#rg").mask("999.999.999-W", {
        translation: {
            'W': {
                pattern: /[X0-9]/
            }
        },
        reverse: true
    })
    $("#codigo").mask("AA.LLL.0000", options)

*/