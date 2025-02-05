var removeAnagrams = function(words) {
    
    const mp= new Set();
    let arr= new Array();
    for( let i of words){
        let temp=i.split('').sort().join('');
        console.log(i);
        if(mp.has(temp))continue;
        else{
            mp.clear();
         arr.push(i);
         mp.add(temp)
        }

      
    }
      return arr;
};

const words=["ab","ac","ca","ba"];
console.log(removeAnagrams(words));