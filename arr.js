// For Each

var hobbies = ['Singing', 'Coding', 'Dancing', 'shipping', 'jumping'];
hobbies.forEach(function(value,index){
    console.log("hobbies = " +value);
});
console.log("************************************");
hobbies.forEach((value,index) => {
    console.log("hobbies ="+value);
});

//Miscellenous

console.log("************************************");
hobbies.push('Bike Riding','travelling');                 //push
console.log("Hobbies after push = " +hobbies);
console.log("***********************************");

hobbies.pop();                                            //pop
console.log("Hobbies after pop = " +hobbies);
console.log("***********************************");
hobbies.unshift('Cooking','Walking');

console.log("Hobbies after unshift = " +hobbies);      //unshift
console.log("***********************************");
hobbies.shift();

console.log("Hobbies after shift = " +hobbies);         //shift
console.log("***********************************");

var hasHobbies= hobbies.includes('sleeping');            // includes
console.log(hasHobbies);
console.log("***********************************");

hobbies.splice(2,0,'reading','writing');                // splice
console.log(hobbies);     
console.log("***********************************");

var hobbies = hobbies.slice(0,1);                      // slice
console.log(hobbies);
console.log(hobbies);
console.log("***********************************");

var joinHobbies = hobbies.join(' ');                    // join
console.log(joinHobbies);
console.log("***********************************");

var indexHobbies = hobbies.indexOf('Singing');          // indexOf
console.log(indexHobbies);
console.log("***********************************");

var numbers = [10, 20, 30, 40];                          // Map
var nanNumbers = numbers.map((val, index) => {
     val = val + 10;
     return val;
});
console.log("Old Array = "+numbers);
console.log("***********************************");
console.log("New Array = "+nanNumbers);

var newFilterArray =numbers.filter((val,index)=>{       // Filter and Without Filter 
    return val>30;
});
console.log("Old Array Without Filter=" +numbers);
console.log("*****************************");
console.log("New Array With Filter = " +newFilterArray);

var items=[ {
    item:'pen',
    price: 50
},
{
    item:'lap',
    price: 60
},
{
    item:'book',
    price: 40
},
];
console.log(items);
console.log("******************************************");
var mapItems = items.map((val)=>{
    val.price = val.price+10;
    return val;
});
console.log(mapItems);
console.log("*******************************");
var filterItems = items.filter((val)=>{
    return val.price>100 && val.item.length>3;
});
console.log(filterItems);

//String 

var str = "HELLO WORLD";
var res = str.charAt(0);
console.log(res);

var str = "HELLO WORLD";
var n = str.charCodeAt(0);
console.log(n);

var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2);
console.log(res);

var str = "Hello world, welcome to the universe.";
var n = str.endsWith("universe.");
console.log(n);

var res = String.fromCharCode(65);
console.log(res);

var str = "Hello world, welcome to the universe.";
var n = str.includes("world");
console.log(n);

var str = "Hello world, welcome to the universe.";
var n = str.indexOf("welcome");
console.log(n);

var str = "Hello planet earth, you are a great planet.";
var n = str.lastIndexOf("planet");
console.log(n);

var str1 = "ab";
var str2 = "cd";
var n = str1.localeCompare(str2);
console.log(n);

var str = "The rain in SPAIN stays mainly in the plain"; 
var res = str.match(/ain/g);
console.log(res);

var str = "Hello World!";
str.repeat(2);
console.log(str);

var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools");
console.log(res);

var str = "Visit W3Schools!";
var n = str.search("HessScllo");
console.log(n);

var str = "Hello world!";
var res = str.slice(0, 5);
console.log(res);

var str = "How are you doing today?";
var res = str.split(" ");
console.log(res);

var str = "Hello world, welcome to the universe.";
var n = str.startsWith("Hello");
console.log(n);

var str = "Hello world!";
var res = str.substr(1, 4);
console.log(res);

var str = "Hello World!";
var res = str.toLowerCase();
console.log(res);

var str = "Hello World!";
var res = str.toString();
console.log(res);

var str = "Hello World!";
var res = str.toUpperCase();
console.log(res);

var str = "       The New Chief Minister of Karnataka B S Yedruppa!        ";
alert(str.trim());
console.log(alert);

var str = "Hello World!";
var res = str.valueOf();
console.log(res);

