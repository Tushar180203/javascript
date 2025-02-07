const arr1=[10,20,30,50,70];
const arr2=[40,60];

let i=0,j=0,k=0;
const ans=[];

while(i<=arr1.length-1 && j<=arr2.length-1){
    
    if(arr1[i]<=arr2[j]){
        ans[k]=arr1[i];
        i++;
        k++;

    }
    else{
        ans[k]=arr2[j];
        j++;
        k++;
    }

}

while(i<=arr1.length-1){
    ans[k]=arr1[i];
    k++;
    i++;
}

while(j<=arr2.length-1){
    ans[k]=arr2[j];
    k++;
    j++;

}


console.log(ans);
