function hello(){
    console.log("Hello");
}

hello();

function moneybag(){
    var money = 1000;
    console.log("I have: " + money + "Taka");
}
moneybag();

function jog(in1, in2){
    var result = in1 + in2;
    return result;
    
}
const result = jog(10, 20);
console.log("Result: " + result);