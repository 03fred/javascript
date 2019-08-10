

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

//console.log(user);
addLine(user);
});

function addLine(dataUser){
    
    tr = document.createElement("tr");
 
    tr.innerHTML = `
    <tr>
    <td><img src="img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
    <td>${dataUser.name}</td>
    <td>${dataUser.email}</td>
    <td>${dataUser.admin}</td>
    <td>${dataUser.birth}</td>
    <td>
      <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
      <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
    </td>
  </tr>
 
    `;

document.getElementById("table-users").appendChild(tr);
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