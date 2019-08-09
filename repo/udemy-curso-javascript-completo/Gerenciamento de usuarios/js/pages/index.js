
function verifica(){
var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach((field) =>{

if(field.name == "gender" && field.checked) console.log(field);


});
}
/*var nome = document.querySelector("#exampleInputName");
var sexo = document.querySelectorAll("#form-user-create [name=gender]:checked");
var dtNascimento = document.querySelector("#exampleInputBirth");
var pais = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var senha = document.querySelector("#exampleInputPassword");
var imagem = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#form-user-create [name=admin]");

nome.value = "Glaucio";
nome.style.color = "blue";
*/