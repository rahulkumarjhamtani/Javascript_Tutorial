console.log("This is about functions in js")

function member(name, greet = "Good afternoon"){
    console.log(greet + " "+ name);
    console.log(name + " is a vcf member");
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
    console.log("END");     //it will not work after return
}

let name1 = "Rahul";
let name2 = "Ankit";
let name3 = "Harsh";
let name4 = "Himanshu";
let name5 = "Karan";
let greet = "Good morning";
// console.log(name1 + " is a vcf member");
// console.log(name2 + " is a vcf member");
// console.log(name3 + " is a vcf member");
// console.log(name4 + " is a vcf member");

member(name1, greet);
member(name2, greet);
member(name3, greet);
member(name4, greet);
member(name5);

let add = sum(2,4,6);
console.log(add);