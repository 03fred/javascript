class CalcController{

constructor(){
this._displayCalc = "0";
this._currentDate;
this.initialize();
       
}

initialize(){
let displayCalcE1 = document.querySelector("#display");
let dateE1 = document.querySelector("#data");
let dateE2 = document.querySelector("#hora");

displayCalcE1.innerHTML = "4567";
dateE1.innerHTML = "01/03/2019";
dateE2.innerHTML = "13:00";

}

get displayCalc(){
 return this._displayCalc;
}
set displayCalc (displayCalc){
this._displayCalc = displayCalc;
}

get dataAtual(){
return this._currentDate;
}

set dataAtual (dataAtual){
this._currentDate = dataAtual;
}



}