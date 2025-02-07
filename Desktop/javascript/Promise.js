
const promise= new Promise((resolve,reject)=>{

    resolve('resolved');
    reject('rejected');
})

console.log(promise.then(()=>{
    console.log('hii');
}));
console.log(promise.catch(()=>{
    console.log('error');
}))