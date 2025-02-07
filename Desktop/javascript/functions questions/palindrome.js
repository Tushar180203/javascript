function palindrome(string){

    let low=0, high=string.length-1;
    while(low<=high){
        if(string[low]!==string[high])return false;
        low++;
        high--;
    }

    return true;
}

console.log(palindrome("nayan"));