
function display(data){
    console.log(data);
}

function makeSum(num1, num2, callBackDisplay){
     
    let sum=num1+num2;
    callBackDisplay(sum);
}

makeSum(10,10,display);

//passing a function as the parameter to another function (callback)



function getData(dataId ,data,getNextData){
   
    setTimeout( ()=>{
        console.log(dataId, data);
        if(getNextData)
        getNextData();
    },
    4000);
}

// getData(1,100);
// getData(2,200);
// getData(3,300);

//ye upper ke teen statements apne aap run honge jab vo 4sec ka time ho jayega khatam 
//pr humko toh ek ek karke karwana tha uske liye ek ke ander ek functions ceate krke krte h pr isse problem arrise hoti h callback hell usme kya hota hai ki
//developers ko easily readable or understandable nhi hoti chize

getData(1,100,()=>{
    getData(2,200)
});
