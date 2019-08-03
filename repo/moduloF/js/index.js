
window.onload = function(){
    document.getElementById('num1').focus();
}


function calcular(operacao)
{

   var num1 = parseInt(document.getElementById("num1").value);
   var num2 = parseInt(document.getElementById("num2").value);
   switch (operacao){
    case 1:
        exibir(num1 + num2)  
          break;

    case 2:
        exibir(num1 - num2)   
         break;

    case 3:
        exibir(num1 / num2)   
         break;

    case 4:
       exibir(num1 * num2)
    break;


   }

}


function exibir(resultado){
    document.getElementById("resultado").innerHTML = resultado;
}


