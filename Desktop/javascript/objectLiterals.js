// const car = {type:"Fiat", model:"500", color:"white"}; // idhar const use kiya h pr hum change kt sakte h values ko


// //object create pehle or properties baad m
// const admi = new Object();   //={} se bhi ho jata
// admi.firstname = "tushar";
// admi.lastname = "sharangpani";
// admi.age = 21;


// //accessing
// console.log(admi["firstname"]);
// console.log(admi.age);


// //nested obje
// tushar = {
//     name:"sher",
//     age:21,
//      qualities: {
//       sports:"good",
//       study:"sher",
//     }
//   }
// //ACCESING
//   console.log(tushar.qualities.sports);


// //methods
// console.log(Object.keys(admi)); 
//     console.log(Object.values(admi));
//     console.log(Object.entries(admi)); 

//  // Object Destructuring
//  const { firstname, age } = admi;
//  console.log(firstname, age); 


//  //cloning
//  const clone = {...tushar};
//  console.log(clone);

//  //Object.assign
//  const target = { a: 1 };
// const source = { b: 2, c: 3 };
// Object.assign(target, source);
// console.log(target); 



const obj={
firstname:"tushar",
lastname:"sharangpani",
age:18,
address :{}


}

// delete obj.address;

// console.log(obj.address);

// const ans=Object.keys(obj).length;
// console.log(ans);

// for(let i in obj){
//     if(typeof(obj[i])==="undefined")console.log("Undefined");
//     //  if((obj[i]==))console.log(`null ${typeof(obj[i])}, ${obj[i]} `);
// }
// console.log(Object.keys(obj.address).length===0);

// //question 1
// const car={
//     brand: "beamer",
//     model: "m5",
//     year: 2019,
//     get(){
//     return (`brands is ${this.brand} of ${this.model}-${this.year}`);
//     }
// }

// // console.log(car.get());


// //question2 
// // const count=  (car)=>{
    
// //     return Object.keys(car).length;
// // }

// // console.log(count(car));

// //question3 

const student = {
    name: "Emily",
    subjects: {
      math: 90,
      science: 85
    }
  };

// //   console.log(student.subjects.math);

// // student.subjects.science=95;
// // console.log(student);

// //copying the whole object with modification of some values;
// // const s2 = {
// //     ...student,
// //     subjects: {
// //         math: 90}
// // };

// // console.log(s2);

// // delete student.name;
// // console.log(student)

// //question5
// const ar=Object.values(student);
// const add= ar.flat(2);
// console.log(add);

var ans=[];
function recursion(student){
   
for(let i in student){
    if(typeof(student[i])==="object"){
        recursion(student[i]);
    
    }
   
    else{
        ans.push(student[i])
    }


   
}
}
recursion(student);
console.log(ans);

