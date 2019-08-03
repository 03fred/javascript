class CalcController{

constructor(){
this._locale = 'pt-BR';
this._displayCalcE1 = document.querySelector("#display");
this._dateE1 = document.querySelector("#data");
this._dateE2 = document.querySelector("#hora");
this._currentDate;
this.initialize();
       
}

initialize(){
this.getDisplayDateTime();

setInterval(()=>{
this.getDisplayDateTime();
},1000);

}

getDisplayDateTime(){
    this.displayDate =  this.currentDate.toLocaleDateString(this._locale);
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
}

get displayTime(){
return this._dateE2.innerHTML;
}
set displayTime(value){
return this._dateE2.innerHTML = value;
}

get displayDate(){
return this._dateE1.innerHTML;
}

set displayDate(value){
return this._dateE1.innerHTML = value;
}
  
get displayCalc(){
 return this._displayCalcE1.innerHTML;
}

set displayCalc (displayCalc){
this._displayCalcE1.innerHTML = displayCalc;
}


get currentDate(){
    return new Date();
 }
    
set currentDate (dataAtual){
this._currentDate = dataAtual;
}


}