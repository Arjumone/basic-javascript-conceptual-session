// console.log('hello world!');

// variable
var x = 5;
x=10;
// console.log(x);

// variable naming

// invalid name
// var 1hello = 2;
// var my-name =3;

// don't use variable reserve keyword

// data type
// number data type
var age = 23;
// string data type
var myName = 'Arju';
// boolean data type
var isSingle = true;

var myScore = 23.12;
var scoreInt =parseInt(myScore);
// console.log(scoreInt);

var num = '12.54';
var num2 = parseFloat(num);
// console.log(typeof num2);
// console.log(parseInt(num2));

var number = 34.65;
console.log(typeof number);

var floating = parseFloat(number);
var integer = parseInt(floating);
var fixed = floating.toFixed(2);

// console.log(floating);
// console.log(integer);
// console.log(parseFloat(fixed));

var x= 2;
var x = x +1
x = x+1;
x += 1;
// post increment
x++;
// example
var x = 2;
// console.log(x++);
// print hocce 5 tarpor bartece 1 = 6
// console.log(x++);
// print hocce 6 tarpor bartece 1 = 7

// pre increment
++y;
var y = 5;
// console.log(++y);
// console.log(++y);
// barar sate sate print korte caile pre increment use korte hobe

// console.log(x);
var y = 6;
var z = x + y;
// console.log(z);

/**
 * ------------------array-------------------
 * */ 
var arr = [ 10, 354, 65, 78,97,98];
// console.log(arr.length);

// console.log(arr[3]);
 var num1 = arr[2];
//  console.log(num1);

var abul = [ 'sadia', 'nadia', 'mim', 'maisha'];
abul.push('anika');
abul.push('jorina');

// console.log(abul);
var ex = abul.pop();
abul.pop();
// console.log(abul);
// console.log(ex);


/**
 * ---------------condition----------------
 * */ 
var age = 18;
// if(age >= 18){
//     console.log('you are adult');
// }
// else{
//     console.log('tmi akono baccha');
// }

// var mark = 56; 
// if(mark>= 80){
//     console.log('A grade');
// }
// else if(mark>= 70){
//     console.log('B grade');
// }
// else if(mark>= 60){
//     console.log('C grade');
// }
// else if(mark>= 50){
//     console.log('D grade');
// }
// else{
//     console.log('fail');
// }

var temperature = 25;
var isRaining = false;
if(temperature>30){
    console.log('it is a hot day');
    if(isRaining == true){
        console.log('but it is raining');
    }
    else{
        console.log('it is not raining');
    }
}
else{
    console.log('it is a cold day');
    if(isRaining == true){
        console.log('but it is raining');
    }
    else{
        console.log('it is not raining');
    }
}

/**
 * --------------------loop------------------
 * */ 
// while loop
var i = 1;

while(i <= 10){
    // console.log('sorry');
    i++;
}

// for loop

for(var i = 1; i<= 10; i++){
    // console.log('um sorry');
}

/**
 * -------------------------array loop------------------------
 * */ 
var num3 = [ 23, 67, 86, 36, 85, 93];
// console.log(num3.indexOf(86));
var x = 0;
while(x < num3.length){
    // console.log(num3[x]);
    x++;
}

for(var i = 0; i< num3.length; i++){
    // console.log(num3[i]);
}
// break
for(var i = 0; i< num3.length; i++){
    // console.log(num3[i]);
    if(num3[i] == 36){
        break;
    }
}

// continue
for(var i = 0; i< num3.length; i++){
    
    if(num3[i] == 36){
        continue;
    }
    // console.log(num3[i]);
}

// maltipal condition
var raining = true;
var umbrella = true;

if(raining == true && umbrella == true){
    console.log('bhaire jabo');
}
else{
    console.log('jabona bhaire');
}

if(raining == false || umbrella== true){
    console.log('jabo');
}
else{
    console.log('jabona');
}

// abul biye korbe,per bus 50 ,per car 11,badbaki jabe rickshaw per person 70
var peoples = 180;

var peopleForCar = peoples % 50;
var peopleForRickshaw = peopleForCar % 11;
 var totalVara = peopleForRickshaw * 70;
//  console.log(totalVara);

// ternary operator
var raining = true;
raining == true ? console.log('bhaire jabona') : console.log('bhaire jabo');

var age =25;
var hasLicence = true;
age >=18? hasLicence==true?console.log('adult with licence'): console.log('aduit bt no licence') :console.log('you r not adult');