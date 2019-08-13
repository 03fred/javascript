class User{

constructor(name,gender, birth, country,email, password,photo,admin){
this._name = name;
this._gender = gender;
this._birth = birth;
this._country = country;
this._email = email;
this._password = password;
this._photo = photo;
this._admin = admin;
this._register = new Date();
}

get name(){
    this._name;
}
get gender(){
    this._gender;
}
get birth(){
    this._birth;
}
get country(){
    this._country;
}
get email(){
    this._email;
}
get password(){
    this._password;
}

get photo(){
    this._photo;
}

get admin(){
    this._admin;
}
get register(){
    this._register;
}

set photo(value){
    this._photo = value;
}

}