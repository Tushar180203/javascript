const arr= [1,2,3,4,5,6];
console.log(arr);
const arr1=arr;
console.log(arr1);
arr1[1]=0;
console.log(arr1);
console.log(arr);

//[ 1, 0, 3, 4, 5, 6 ]
//[ 1, 0, 3, 4, 5, 6 ]
//dono m change ho gaya toh ye toh sabse pehle koi copy hi nhi hai 
//memmory section m jaake dekh sakte h hum dono ko same memery assign hai


//for objects
const obj = {
    firstName:"tushar",
    lastName:"sharangpani"
}

const obj1=obj;

obj1.lastName="shar";
console.log(obj);
console.log(obj1);

//dono change ho jayega koi copy nhi hogi 


//shallow copy

//using assign
const obj2={};
Object.assign(obj2,obj);

obj2.lastName="sh";
console.log(obj2);
console.log(obj);

//using spread operator or rest operator
const obj3={...obj};
obj3.lastName="s";
console.log(obj3);
console.log(obj);

//for array we can use method like slice map etc

const array =arr.slice();
console.log(array);
const arr3=[];
Object.assign(arr3,arr);
arr3[0]=10;


//nested objects cannot be shallow copied
const obj6 = {
    firstName:"tushar",
    lastName:"sharangpani",
    address: {
      Hno:10,
      sector:3
    }
}
const obj5={};
Object.assign(obj5,obj6);
obj5.address.Hno=11;
console.log(obj6,obj5);




///deep copy
const obj4 = JSON.parse(JSON.stringify(obj5));
obj4.address.Hno=12;
console.log(obj4,obj5);
