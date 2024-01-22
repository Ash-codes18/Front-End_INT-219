let a=5;
let b=1;
let c=a+b;
console.log(c);
console.log(a-b);
let d=c>a;
console.log(d);

console.log(typeof(a));
console.log(typeof(d));

let e="Names";


function add(a,b){
    return a+b;
}

function factorial(n){
    if(n==1){
        return 1;
    } 

    return n*factorial(n-1);
}

console.log(factorial(5));




let s="Ash";
let ss="Ashmit";

if(s[0]==ss[0]){
    console.log("The first character in both the strings are equal");
}

if(s[0]<ss[1]){
    console.log(`${ss[1]} is greater than ${ss[0]}.`)
}

console.log(s[0]);
console.log(s[0]);

console.log(s.startsWith('A'))
console.log(s.endsWith('h'))



console.log((5>23)?"5 is greater than 23":"5 is less than 23");
console.log((55>23)?"55 is greater than 23":"55 is less than 23");
console.log(ss.at(4));
console.log(`The length of the string ${ss} = ${ss.length}`)
