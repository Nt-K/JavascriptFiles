function sum(a,b){
    function addSum(){
        return a+b;
    }
    return addSum;
}
var addFunc = sum(10,20);
var total = addFunc();
console.log('Total',total);
console.log(window);
console.log(this);
console.log(this===window);
var  name = 'Nit';
console.log(window.name);
console.log(this.name);

var person = {
                 name: 'Dar',
                 age: 29, 
                 getName : function(){
                     console.log('get Name Method', this.name);
                     console.log(window);
                     getData();
                     function getData(){
                         console.log('Get data Method', this.name)
                     }
                     return this.name;
                 }
             }
            var heroName = person.getName();
            console.log(' Name = '+heroName);

            console.log("*******************");

for(var i=0;i<5;i++){
    console.log(i);
}
console.log('Value of i = ' +i)

// It works only inside loop. Let doesnt work outside loop

for(let k=0;k<5;k++){
    console.log(k);
}
// console.log('Value of k = ' +k)   // This line doesnt work because outside loop let doesnt work

var hobbies = ['dancing', 'singing', 'cricket'];
console.log('Hobbies = ' +hobbies);
var hobbies = ['Kissdss'];
console.log('Hobbies = ' +hobbies);
hobbies = ['singing'],
console.log("***********************");
let fruits = ['Orange', 'Banana'];
console.log('Fruits =' +fruits);
fruits = ['JackFruit'];
console.log('Fruits =' +fruits);

console.log("************************");

// const

const items = ['Lipstick', 'Kajal', 'Deo', 'Wallet'];
console.log('Items = ' +items);
items[0] = ['Bag', 'Books'];
console.log(items); // This line removed item column it looks and takes it has array inside array 



