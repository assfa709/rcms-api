console.log('test');

//We can use let to reassign variable
let a = 1;

//const used only for constant variables
const pi = 3.14;
let b = "abebe";
let c = true;
let d = 'a';

console.log(a);

if (a === 2){
    console.log('correct');
}else{
    console.log('incorrect');
}

const arr = [1, 2, 3, 4, 5];
for (let i=0; i<arr.length; i++){
    console.log(`number: ${i + 1}`)
}


function addition(a, b){
    return a + b;
}


console.log(addition(4, 5));


