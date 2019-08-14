class UserController {

  constructor(formIdCreate, formIdUpdate, tableId) {
    this.formE1 = document.getElementById(formIdCreate);
    this.formUpdateE1 = document.getElementById(formIdUpdate);
    this.tableEL = document.getElementById(tableId);
    this.onSubmit();
    this.onEdit();
   // this.selectAll();
  }

  onEdit() {
    document.querySelector("#user-update .btn-cancel").addEventListener("click", event => {
      this.showPanelCreate();
    });

    this.formUpdateE1.addEventListener("submit", event => {
      event.preventDefault();
      let btn = this.formUpdateE1.querySelector("[type=submit]");
      btn.disabled = true;
      let values = this.getValues(this.formUpdateE1);

      let index = this.formUpdateE1.dataset.trIndex;
      let tr = this.tableEL.rows[index];

      let userOld = JSON.parse(tr.dataset.user);

      let result = Object.assign({}, userOld, values);

      this.addEventsTR(tr);
      this.updateCount();

      this.getPhoto(this.formUpdateE1).then(
        (content) => {
          result._photo = (values.photo != true) ? userOld._photo : content;
          tr.dataset.user = JSON.stringify(result);

          tr.innerHTML = `
      <tr>
      <td><img src="${result._photo}" alt="User Image" class="img-circle img-sm"></td>
      <td>${result._name}</td>
      <td>${result._email}</td>
      <td>${result._admin === true ? 'SIM' : 'NÃO'}</td>
      <td>${Utils.dateFormat(result._register)}</td>
      <td>
        <button type="button" class="btn btn-edit btn-primary btn-xs btn-flat">Editar</button>
        <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
      </td>
      </tr>
   
      `;

          this.formUpdateE1.reset();
          btn.disabled = false;
          this.showPanelCreate();
        },
        (e) => {
          console.error(e);

        });
    });

  }
  onSubmit() {

    this.formE1.addEventListener("submit", event => {
      event.preventDefault();
      let btn = this.formE1.querySelector("[type=submit]");
      btn.disabled = true;

      let values = this.getValues(this.formE1);
      if (!values) return false;
      //values.photo = "";
      this.getPhoto(this.formE1).then(
        (content) => {
          values.photo = content;
          this.insert(values);
          this.addLine(values);
          this.formE1.reset();
          btn.disabled = false;
        },
        (e) => {
          console.error(e);

        });


    });

  }


  getPhoto(formE1) {
    return new Promise((resolve, reject) => {

      let fileReader = new FileReader();
      let elements = [...formE1.elements].filter(item => {

        if (item.name === 'photo') {
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
      if (file) {
        fileReader.readAsDataURL(file)
      }
      else {
        resolve('img/boxed-bg.jpg')
      };

    });

  }

  getValues(formEl) {
    let user = {};
    var aux = '';
    let isvalid = true;
    [...formEl.elements].forEach((field) => {

      if (['name', 'email', 'password'].indexOf(field.name) > -1 && !field.value) {

        field.parentElement.classList.add('has-error');
        isvalid = false;
        return false;


      }

      if (field.name == "gender" && field.checked) {
        aux = field.value;
      } else if (field.name === "admin") {
        user[field.name] = field.checked;

      } else {
        user[field.name] = field.value;
      }

      user['gender'] = aux == null ? field.value : aux;

    });
    if (!isvalid) {

      return false;
    }
    return new User(user.name, user.gender, user.birth, user.coutry, user.email,
      user.password, user.photo, user.admin);


  }

  getUsersStorage(){
    let users = [];

    if (sessionStorage.getItem("user")) {
      users = JSON.parse(sessionStorage.getItem("user"));
    }
    return users;

  }
  selectAll(){
    let users = this.getUsersStorage();
    users.forEach(dataUser => {
      let user = new User();
      user.loadFromJSON(dataUser);
      this.addLine(user);
       
    });

  
  }

  insert(data) {

    let users = this.getUsersStorage();
    users.push(data);
    sessionStorage.setItem("users", JSON.stringify(users));
    
  }

  addLine(dataUser) {
    let tr = document.createElement("tr");


    tr.dataset.user = JSON.stringify(dataUser);
    tr.innerHTML = `
            <tr>
            <td><img src="${dataUser._photo}" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser._name}</td>
            <td>${dataUser._email}</td>
            <td>${dataUser._admin === true ? 'SIM' : 'NÃO'}</td>
            <td>${Utils.dateFormat(dataUser._register)}</td>
            <td>
              <button type="button" class="btn btn-edit btn-primary btn-xs btn-flat">Editar</button>
              <button type="button" class="btn btn-danger btn-delete btn-xs btn-flat">Excluir</button>
            </td>
          </tr>
         
            `;

    this.addEventsTR(tr);
    this.tableEL.appendChild(tr);
    this.updateCount();
  }


  addEventsTR(tr) {
    tr.querySelector(".btn-delete").addEventListener("click", e => {
      if (confirm("Deseja realmente exluir?")) {

        tr.remove();
        this.updateCount();
      }

    });

    tr.querySelector(".btn-edit").addEventListener("click", e => {

      let json = JSON.parse(tr.dataset.user);

      this.formUpdateE1.dataset.trIndex = tr.sectionRowIndex;


      for (let name in json) {
        let field = this.formUpdateE1.querySelector("[name =" + name.replace("_", "") + "]");

        if (field) {
          switch (field.type) {
            case 'file':
              continue;
              break;
            case 'radio':
              field = this.formUpdateE1.querySelector("[name =" + name.replace("_", "") + "][value=" + json[name] + "]");
              field.checked = true;
              break;
            case 'checkbox':
              field.checked = json[name];
              break;
            default:
              field.value = json[name];

          }


        }
      }
      this.formUpdateE1.querySelector(".photo").src = json._photo;
      this.showPanelUpdate();

    });
  }

  showPanelCreate() {
    document.querySelector("#user-create").style.display = 'block';
    document.querySelector("#user-update").style.display = 'none';

  }

  showPanelUpdate() {
    document.querySelector("#user-create").style.display = 'none';
    document.querySelector("#user-update").style.display = 'block';



  }

  updateCount() {

    let numberUsers = 0
    let numberAdmin = 0;

    [...this.tableEL.children].forEach(tr => {

      numberUsers++;
      let user = JSON.parse(tr.dataset.user);
      if (user._admin) numberAdmin++;


    });
    document.querySelector("#number-users").innerHTML = numberUsers;
    document.querySelector("#number-admin").innerHTML = numberAdmin;

  }


}



