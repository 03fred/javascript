class CalcController{

constructor(){
this._operation = [];
this._locale = 'pt-BR';
this._displayCalcE1 = document.querySelector("#display");
this._dateE1 = document.querySelector("#data");
this._dateE2 = document.querySelector("#hora");
this._currentDate;
this.initialize();
this.initButtonsEvents();
}

initialize(){
this.getDisplayDateTime();

setInterval(()=>{
this.getDisplayDateTime();
},1000);

}



addEventListenerAll(element, events, fn){
    events.split(' ').forEach(event => {
      element.addEventListener(event,fn,false);
    });
  
  }
  
execBtn(value){
switch(value){

  case 'ac':
  this.clearAll();
  break;

 case 'ce':
  this.clearEntry();
 break;

 case 'soma':
    this.addOperation('+');
break;

 case 'subtracao':
    this.addOperation('-');
 break;

 case 'divisao':
    this.addOperation('/');
  break;

case 'multiplicacao':
    this.addOperation('*');
  break;

case 'porcento':
    this.addOperation('=');
break;

case 'igual':
  break;

case 'ponto':
    this.addOperation('.');
  break; 

case '0':
case '1':
case '2':
case '3':
case '4':
case '5':
case '6':
case '7':
case '8':
case '9':
this.addOperation(parseInt(value));
break;

 default:
 this.setError();
 break; 


}

}

isOperator(value){
return(['+','-','*','%','/'].indexOf(value) > -1);
}

setError()
{
  this.displayCalc = "ERROR";

}

clearAll(){
 this._operation = [];
}

clearEntry(){
this._operation.pop();

}

addOperation(value){

if(isNaN(this.getLastOperation()))
{
      if(this.isOperator(value)){
          this.setLastOperation(value);
      }else if(isNaN(value)){
          
      }else{
          
        this._operation.push(value);
      }

}else{

    let newValue = this.getLastOperation().toString() + value.toString();
    this.setLastOperation(parseInt(newValue));
    if(this.isOperator(value)){
     this._operation.push(value);
      }

}
console.log(this._operation);
}

getLastOperation(){
 return this._operation[this._operation.length - 1];

}

setLastOperation(value){
  this._operation[this._operation.length - 1] = value;
}

initButtonsEvents(){
    let buttons  = document.querySelectorAll("#buttons > g, #parts > g");
    buttons.forEach((btn,index) =>{
        this.addEventListenerAll(btn,"click drag", e =>{
          let textBtn = btn.className.baseVal.replace("btn-","");
          this.execBtn(textBtn);
        
        });
    this.addEventListenerAll(btn,"mouseover mouseup mousedown", e => {
    btn.style.cursor = "pointer";

    });

    });
}


getDisplayDateTime(){
    this.displayDate =  this.currentDate.toLocaleDateString(this._locale,{
    day:"2-digit",
    month: "long",
    year:"numeric"

    });
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