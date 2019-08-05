var num1 = 10;
var name ='asd';
var num2 = '10';
if(num1===num2)
{
    console.log("Equal");
}
else{
    console.log("Not Equal");
}

var equals = (num1===num2)?'true':'false';
console.log(equals);

var b = (num1>10)?'greater': (num1===10)?'equals':'lesser';
console.log(b);

var myAge=50;
console.log("Type of myApp =" +typeof myAge);
var myName = 'Nit';
console.log("Type of myName =" +typeof myName);
var hobbies = ['movies', 'travelling'];
console.log("Types of Hobbies = " +typeof hobbies);

var isArry = Array.isArray(hobbies);
console.log(isArry);

var library = [ 
    {author: 'BillGates', title: 'the road ahead'},
    {author: 'Gaffates', title: 'thsfgdhead'},
    {author: 'sfsassff', title: 'sfsagad'},
];

for(var i=0; i<library.length;i++){
    console.log(library[1]);
    console.log((library[1].author));
}

console.log("**********************************");
for(var index in hobbies){
    console.log("Hobbies = " + hobbies[index]);
}

console.log("*********************************");

var person = {
    name:'Nit',
    age:25
};
for(var i in person){
    console.log(person[i]);
}

console.log("**********************************");


for(var index of hobbies){
    console.log("Hobbies = " + index);
}

hobbies[6] = 'sleeping';
hobbies['name'] = 'jumping';

console.log("*********************************");

for(var value of hobbies){
    console.log("hobbies = " +value);
}

console.log("********************************");

for(var index in hobbies){
    console.log("hobbies = " +hobbies[index]);
}

console.log("********************************");

console.log(hobbies);

