//client side

//alert('Olá mundo');

/*var mensagem = 'Olá Mundo';
alert(mensagem);

var a = 3;
var b = 2;

var soma = a + b;
var sub = b - a;
var multi = a * b;
var div = b / a;
                    ESTRUTURA CONDICICIONAL
console.log('Soma ' + soma);
console.log('Sub ' + sub);
console.log('multi ' + multi);
console.log('div ' + div);
console.log(3 % 2); //resto da divisão

if (b % 2 === 0) {
    alert('par');
} else {
    alert('ímpar');
}

//              ESTRUTURA REPETIÇÃO

var i = 0;
while (i < 3) {
    alert(i);
    i = i + 1;

}

//for 

var j = 0;
for (j; j < 3; j++) {
    alert(j);
}


var numer = 6;
var decimal = 5.6; //numeros flutuantes
var string = "olá mundo";
var lsita = ["laranja", "maçã", "banana"];
console.log(lsita);

for (i in lsita) {
    alert(lsita[i]);
}

-----------------FUNÇÕES

function soma(a, b) {
    console.log(a + b);
}

//soma(2, 2);

function subtracao(a, b) {
    return a - b;
}

console.log(subtracao(2, 3));

-------------------Eventos 
function mensagem(nome) {
    alert(nome + ": clickou");
}
------------------ Estilização js
function mudaCor(cor) {
    var elemento = document.getElementById("idTest");
    // elemento.style.color = cor;
    elemento.style.backgroundColor = cor;
}
------------------ Validação de formulário

function valida() {

    var nome = document.getElementById("nome").value;
    if (nome == "") {
        alert('nome não pode ser vazio');
    }

}    ------------ Jquery

//verifica se o documento foi carregado
$(document).ready(function() {
    $('button').click(function() {
        $('h1').hide();
    });

});

$(function() {
    $('button').click(function() {
        $('h1').hide();
    });

});

$(function() {
    $('button').click(function() {
        $('h1').css("color", "red");
    });

});



$(function() {
    $('#vermelho').click(function() {
        $('p').css("color", "red");
        $('p').fadeOut(); //esconder pausadamente
        $('p').delay(3000);
        $('p').css("color", "blue");
        $('p').fadeIn('slow'); //fadeIn com parametro slow
    });
    $('#azul').click(function() {
        $('p').css("color", "blue")
            .fadeOut(3000)
            //inserir texto na tag html
        $('#mensagem').text("cor alterada com sucesso")
            .text("cor alterada com sucesso")
            .css({ color: 'green', border: '1px solid green' })
            .delay(3000)
            .addClass('green')
            .delay(5000)
            .removeClass('green');
    });

});*/

$(function() {
    $('#l1').click(function() {
        $('#12').hide();
        $('#13').hide();
        $('#14').hide();
        $('#11').show();
    })

    $('#l2').click(function() {
        $('#11').hide();
        $('#13').hide();
        $('#14').hide();
        $('#12').show();
    })

    $('#l3').click(function() {
        $('#11').hide();
        $('#13').show();
        $('#14').hide();
        $('#12').hide();
    })

    $('#l4').click(function() {
        $('#11').hide();
        $('#13').hide();
        $('#14').show();
        $('#12').hide();
    })
});