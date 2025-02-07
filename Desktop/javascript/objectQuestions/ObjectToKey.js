
// function help(obj){
//     let ans=[];
//     for( let i in obj){
//       ans.push(i);
//     }

//     return ans;
// }

// const obj={
//     "tushar":1,
//     "sharangpani":2,
//     "jawn":3
// }

// const ans=help(obj);
// console.log(ans);

// using object.keys()

function help(obj){
    let ans=[];
  Object.keys(obj).forEach((a)=>{
    ans.push(a);
  });

    return ans;
}

const obj={
    "tushar":1,
    "sharangpani":2,
    "jawn":3
}
console.log(help(obj));