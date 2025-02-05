var areAlmostEqual = function(s1, s2) {
    if(s1===s2)return true;
    let a='@',b='@';
     let count = 0;
    for(let i=0;i<s1.length;i++){
        
        if(s1[i]===s2[i])continue;
        else{
            if(count === 0){
                a=s1[i];
                b=s2[i]
            }
            else{
                // console.log(s1[i] , b , s2[i] , a);
                console.log("rwgf");
              if(s1[i]!==b || s2[i]!==a) return false;
            }

            count++;
        }
        }
        console.log(a,b);
        console.log(count);
        if(count===2 )return true;
        return false;
    
};

console.log(areAlmostEqual("bank","kanb"));