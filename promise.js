let resultData = new Promise(function(resolve,reject){
    if(10===10){
        reject('Failed');
    }
    else{
        resolve('Success');
    }
});
resultData.then((data)=>{
    console.log("Then Block = " +data);
}).catch((error)=>{
    console.log("Catch Block = " +error);
});


// resolve Changed and const applied

let employeeData = new Promise(function(resolve,reject){
    const employee = [
                            {
                                name: 'D Boss',
                                age: 49
                            },
                            { 
                                name: 'Sundari',
                                age: 38
                            },
                            {
                                name: 'Sudeep',
                                age: 45
                            }
                     ];
    if(10>10){
        reject('Failed');
    }
    else{
        resolve(employee);
    }
});
employeeData.then((data)=>{
    //console.log("Employee Data = " ,data);
    return data;
}).catch((error)=>{
    console.log("Catch Block = " +error);
}).then(function(data1){                                // new feature in ECMA Script 6
    console.log('This is then block 2' ,data1);
});