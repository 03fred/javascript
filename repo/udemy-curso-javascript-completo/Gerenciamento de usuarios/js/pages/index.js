

let  userController = new UserController("form-user-create","form-user-update","table-users");







/*

function verifica(){
var fields = document.querySelectorAll("#form-user-create [name]");
var user = {} ;
var aux = null;
fields.forEach((field) =>{

//user[field.name]= field.value;

if(field.name == "gender" && field.checked) 
{
   aux = field.value;
}else{
    user[field.name] = field.value;
}

user['gender']  = aux == null ? field.value : aux; 

});

console.log(user['gender']);
}

document.querySelectorAll("button").forEach((btn)=>{
 btn.addEventListener("click", function(){
  //  console.log("clickou");
 });

});

document.getElementById("form-user-create").addEventListener("submit" ,function(event){
event.preventDefault();
var fields = document.querySelectorAll("#form-user-create [name]");
var user = {} ;
var aux = null;
fields.forEach((field) =>{

//user[field.name]= field.value;

if(field.name == "gender" && field.checked) 
{
   aux = field.value;
}else{
    user[field.name] = field.value;
}

user['gender']  = aux == null ? field.value : aux; 

});

var objectUser = new User(user.name,user.gender,user.birth,user.coutry,user.email,
  user.password,user.photo,user.admin);

addLine(objectUser);



});


var nome = document.querySelector("#exampleInputName");
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