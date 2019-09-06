
function enviar() {
    var value = parseInt(document.querySelector('#test').value);

    let i, previus = 0, next = 1,sum = 0 ;

    for( i = 0 ; i < value;i++){
      sum = next + previus;
      previus =  next;
      next = sum;
    }

    var element_father  = document.body;
   
    var element = document.createElement('h1');

    var text  =  document.createTextNode(`Fibonacci de ${value} é ${previus}`);

    element.appendChild(text);

   element_father.appendChild(element);

}