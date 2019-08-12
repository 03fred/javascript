class UserController{

constructor(formId,tableId){
    this.formE1 = document.getElementById(formId);
    this.tableEL = document.getElementById(tableId);
this.onSubmit();
}

onSubmit(){

    this.formE1.addEventListener("submit" ,event =>{
    event.preventDefault();
    let values = this.getValues();
    values.photo = "";
    
    this.getPhoto().then(
    (content) => {
      values.photo = content;
      this.addLine(values);
    },
    (e) => {
     console.error(e);

    });

    
    });

}


getPhoto(){
return new Promise((resolve,reject) => {
  
  let fileReader = new FileReader();
  let elements = [...this.formE1.elements].filter(item => {

    if(item.name === 'photo'){
      return item;
    }
  });

  var file = elements[0].files[0];
  fileReader.onload = () => {
   resolve(fileReader.result);
  };
fileReader.onerror = (e) => {
reject(e);
};
  fileReader.readAsDataURL(file);

});
  
};

getValues(){
  var user = {};
  var aux ='';
[...this.formE1.elements].forEach((field) =>{
        
        if(field.name == "gender" && field.checked) 
        {
           aux = field.value;
        }else{
            user[field.name] = field.value;
        }
        
        user['gender']  = aux == null ? field.value : aux; 
        
        });
        
        return  new User(user.name,user.gender,user.birth,user.coutry,user.email,
          user.password,user.photo,user.admin);
           

        }        
    
    addLine(dataUser){
            
            //tr = document.createElement("tr");
         
           this.tableEL.innerHTML = `
            <tr>
            <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
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
        
        }
}



