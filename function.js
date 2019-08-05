// Named function

function getSum(num1, num2){
    var sum = num1 + num2;
    return sum;
}
var sumValue = getSum(10,20);
console.log(sumValue);

//function expression 

var sumData = function(number1,number2){
    var sum = number1 + number2;
    return sum;
}
var sumValue1 = sumData(5,20);
console.log(sumValue1);

// Miscellaneous

// Immediately invoked Function Expression

(function(val1,val2){
   var sum = val1 + val2;
   console.log("Sum = "+sum);
}(10,20));

// Fat Array Fucntion 

var getSumData = (val3, val4) => {
    var sumVal1 = val3 + val4;
    return sumVal1;
}
var value = getSumData(100, 200);
console.log(value);

// Hoisting

var name;
console.log(name);
name = 'D Boss';
console.log(name);

// Miscellenous

function fname(){
    console.log(name2);
     var name2 ='Dinga';
}
fname();

// Clearation of Previous 

function fname(){
    var name1;
    console.log(name1);
    name1='Dingaa';
    console.log(name1);
}

// Miscellenous

function first(){
    setTimeout(function(){
     console.log("first");
    });
}
function second(){
    console.log("second");
}
first();
second();

// Miscellenous 

function firstCallBack(){
    setTimeout(function(){
     console.log("first");
     callBack();
    });
}
function second(){
    console.log("second");
}
first(second);
