function factorial(n){
    let res = 1;
    while(n) res *= n--;
    return res;
}

alert( factorial(50) );
