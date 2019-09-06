
function enviar() {
    let value = parseInt(document.querySelector('#test').value);

    let i, previus = 0, next = 1,sum = 0 ;

    for( i = 0 ; i < value;i++){
      sum = next + previus;
      previus =  next;
      next = sum;
    }

    let element_father  = document.body;
   
    let element = document.createElement('h1');

    let text  =  document.createTextNode(`Fibonacci de ${value} é ${previus}`);

    element.appendChild(text);

   element_father.appendChild(element);

   

}

function multiplicationTable(){
    let element_father  = document.body;
    let p = document.createElement('p');
    let elements = '';
    let tab = 0;
 
    for(let i = 1; i < 11;i++){
       tab = i * 10 ;
       elements += `
       ${i} * 10 = ${tab}
       `;
 
    }
    
    let texts  =  document.createTextNode(elements);
    p.appendChild(texts);
    let test =  document.querySelector("#test");
    test.style.backgroundColor = "blue";
     
    element_father.appendChild(p);
}