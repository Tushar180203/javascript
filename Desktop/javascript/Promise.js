
const promise= new Promise((resolve,reject)=>{

    resolve('resolved');
    reject('rejected');
})

promise.then((data)=>{
    console.log(data);
});
promise.catch((err)=>{
    console.log(err);
});