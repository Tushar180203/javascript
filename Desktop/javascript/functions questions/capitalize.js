const string ="hi my name is tushar";

function capitalize(string){
    let real=string.split(' ');
  
    for(let i=0;i<real.length;i++){
      real[i] = real[i][0].toUpperCase()+real[i].slice(1);
      
    }

    return real.join(' ');
}

const ans= capitalize(string);
console.log(ans);