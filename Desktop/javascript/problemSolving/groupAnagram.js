var groupAnagrams = function(strs) {
    let ans= new Array();
    let mp=new Map();

    for(let i of strs){
        var temp= i;
        var Sortedtemp=temp.split('').sort().join('');
        if(mp.has(Sortedtemp)){
           mp.get(Sortedtemp).push(i) ;
        }
        else{
            mp.set(Sortedtemp,[]);
            mp.get(Sortedtemp).push(i) ;

                    }
    }

const answer=[];
for( let i of mp.keys()){
   answer.push(mp.get(i));
}

    return answer;
};

let strs=["dog","god","sher","hers","abba","baba"];
console.log(groupAnagrams(strs));