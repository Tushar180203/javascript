

// //array
// const animal=["sher","cheetah", "gaay","bhes"];


// console.log(typeof(animal)); //array bhi ek type ka object hi hota hai 

// //new keyword
// const sher = new Array("sher", "billi", "sherKiMummy");
// console.log(sher[0]);


// console.log(sher);

// console.log(sher.length);//length of array

// //looping in the array using for of
// for(let i of animal)console.log(i);

// //for each
// sher.forEach((a)=>{
//     console.log(a);
// })

// //push operation;
// sher.push("billi ke papa");
// sher.forEach((a)=>{
//     console.log(a);
// })

// //pop 
// sher.pop();

// //destructing
// // const [a,,b]=sher;
// // console.log(b);


// //unshift
// sher.unshift("sherni");
// const [n]=sher;  //The unshift() method overwrites the original array.
// console.log(n);  //The unshift() method adds new elements to the beginning of an array.

// //SHIFT
// sher.shift();
// console.log(sher[0]); //The shift() method removes the first item of an array.

// //filter
// const res=sher.filter((s)=>{return s.length>5});
// console.log(res);
// //The filter() method creates a new array filled with elements that pass a test provided by a function.
// //The filter() method does not change the original array.


// //map
// const ress=sher.map((a)=>{return a.length>5});
// console.log(ress);
// //map() creates a new array from calling a function for every array element.

// // //map()
// /// Creates a new array with the same length as the original array, but with each element transformed by the callback function.

// // filter()
// // Creates a new array with only the elements that pass the conditions implemented by the callback function.

// //reduce
// const numbers = [175, 50, 25];
// const resu=numbers.reduce((sum,num)=>{return sum+num});
// console.log(resu);
// //single value should be there  that is the result, no change to original array 

// //rest and spread operator
// const aa=[...numbers ,25];
// console.log(aa)

 const arr=[1,2,2,3];
 arr[3]=4;
 arr[arr.length]=5;
//  arr.splice(5,0,6);
//  console.log(arr);
 
//  arr.forEach((value)=>{
//     console.log(value); }
//  )

//  for(let i of arr){
//     console.log(i);
//  }

//  for(let i in arr){
//     console.log(i);
//  }

// const arrr=arr.reduce((h1,h2)=>{
//     return h1+h2;
// })
// console.log(arrr);

// const newarr= arr.filter((a)=>a%2==0);
// console.log(newarr);

// const double= arr.map((a)=>{
//     return a*2;
// });
// console.log(double);

// const  max=double.reduce((maxi,a)=>{
//     if(maxi<a){
//         maxi=a;
//     }
//     return maxi;
// });
// console.log(max);

const count = arr.reduce((acc ,a)=>{
    acc[a]=(acc[a] ||0)+1;
    return acc;
})
console.log(count);

// // console.log(Math.max(... Object.values(count).keys()));

// const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const a=words.reduce((acc ,i)=>{
//     const str=i.split("").sort().join("");
//     acc[str]=(acc[str]|| [])
//     acc[str].push(i);
//     return acc
// },[]);

// console.log(a);
