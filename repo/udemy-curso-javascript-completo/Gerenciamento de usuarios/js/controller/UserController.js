class UserController{

constructor(formId,tableId){
    this.formE1 = document.getElementById(formId);
    this.tableEL = document.getElementById(tableId);
this.onSubmit();
}

onSubmit(){

    this.formE1.addEventListener("submit" ,event =>{
    event.preventDefault();
    let btn = this.formE1.querySelector("[type=submit]");
    btn.disabled = true;

    let values = this.getValues();
    values.photo = "";
    
    this.getPhoto().then(
    (content) => {
      values.photo = content;
      this.addLine(values);

      this.formE1.reset();
      btn.disabled = false;
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
  (file) == true?fileReader.readAsDataURL(file):resolve('img/boxed-bg.jpg');

});
  
};

getValues(){
  var user = {};
  var aux ='';
  let isValid = true;
[...this.formE1.elements].forEach((field) =>{
        
  if(['name','email','password'].indexOf(field.name) > -1 && !field.value){
      
      field.parentElement.classList.add('has-error');
      return false;
      isvalid = false;

  }

        if(field.name == "gender" && field.checked) 
        {
           aux = field.value;
        }else if(field.name === "admin"){
        user[field.name]=field.checked;
        
        }else{
            user[field.name] = field.value;
        }
        
        user['gender']  = aux == null ? field.value : aux; 
        
        });
        if(!isvalid){
           
          return false;
        }
        return  new User(user.name,user.gender,user.birth,user.coutry,user.email,
          user.password,user.photo,user.admin);
           

        }        
    
    addLine(dataUser){
            let tr = document.createElement("tr");
            tr.innerHTML = `
            <tr>
            <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser._name}</td>
            <td>${dataUser._email}</td>
            <td>${dataUser._admin === true?'SIM':'NÃO'}</td>
            <td>${Utils.dateFormat(dataUser._register)}</td>
            <td>
              <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
              <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
          </tr>
         
            `;
        this.tableEL.appendChild(tr);
        }
}



