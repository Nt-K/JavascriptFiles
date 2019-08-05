var fruits = ['Apple','Orange','Banana','Mango'];
console.log(fruits);

for(var i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

var todayDate = new Date();
console.log('Today Date =' +todayDate);

var date = new Date();
console.log(date);

var date = new Date(2019, 11, 24,10, 33, 30, 0);
console.log(date);

var date= new Date(0);
console.log(date);

var date= new Date("Febraury 16, 2019 12:30:50");
console.log(date);

var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(months[todayDate.getMonth()]);
console.log(days[todayDate.getDay()]);

console.log(Math.ceil(4,6));
console.log(Math.random());
console.log(Math.floor(4,5));
console.log(Math.round(7.9));
console.log(Math.pow(2,3));
console.log(Math.floor(Math.random() * 10));
console.log(Math.round(Math.random() * 10));

var name="Darshan";
console.log(name);
var name1= name;
console.log(name1);
var name1= "Srivasta";
console.log(name1);

var person = {
    name: "Namr"
};

console.log(person.name);
var person1 = person;
console.log(person1.name);
person1.name = "Namr"; 
console.log(person.name);
console.log(person1.name);

