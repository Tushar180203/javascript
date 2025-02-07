const obj={
    "tushar":1,
    "sharangpani":2,
    "jawn":3
}

function check(obj,val){
    if(obj[val] !=undefined)return true;
    else return false;
}


const istrue=check(obj,"sher");
console.log(istrue);