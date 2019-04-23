function fizzBuzz(){
    let array = [];
    for(let n=1 ; n<101;n++){
    array.push(n);
    }
    function sort(z,n,a){
    while(n<101,(z%5==0)&&(z%3==0)){
    return z='fizzBuzz';
    }
    while(n<101,z%3==0){
    return z='fizz';
    }
    while(n<101,z%5==0){
    return z='buzz';
    }
    return z;
    
    }
    console.log(array.map(sort));
    }
    fizzBuzz();