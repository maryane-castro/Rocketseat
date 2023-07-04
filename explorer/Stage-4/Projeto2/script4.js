//function hoisting -> quando o js, pega uma função e joga pra cima, fazendo com que minha função exista antes da chamada dela

sayMyName(); //chamada

function sayMyName(){   //function
    console.log('meu nome')
}


