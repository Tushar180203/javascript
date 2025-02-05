const car = {type:"Fiat", model:"500", color:"white"}; // idhar const use kiya h pr hum change kt sakte h values ko


//object create pehle or properties baad m
const admi = new Object();   //={} se bhi ho jata
admi.firstname = "tushar";
admi.lastname = "sharangpani";
admi.age = 21;


//accessing
console.log(admi["firstname"]);
console.log(admi.age);


//nested obje
tushar = {
    name:"sher",
    age:21,
     qualities: {
      sports:"good",
      study:"sher",
    }
  }
//ACCESING
  console.log(tushar.qualities.sports);


//methods
console.log(Object.keys(admi)); 
    console.log(Object.values(admi));
    console.log(Object.entries(admi)); 

 // Object Destructuring
 const { firstname, age } = admi;
 console.log(firstname, age); 


 //cloning
 const clone = {...tushar};
 console.log(clone);

 //Object.assign
 const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); 
