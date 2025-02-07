function getVowels(arr){

    const ans=[];
    for(let i of arr){
        if(i!=='a' && i!=='e' && i!=='i' && i!=='o' && i!=='u' ){
            ans.push(i);
        }
    }
    return ans;
}
const arr=['e','a','r','y','i','k','p'];
const ans=getVowels(arr);
console.log(ans);