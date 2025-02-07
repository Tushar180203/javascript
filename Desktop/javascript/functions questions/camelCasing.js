
function convertToCamelCasing(str){
    let string=str.split(' ');
    for(let i=1;i<string.length;i++){
        string[i]=string[i][0].toUpperCase() + string[i].slice(1);
    }
    return string.join('');

}

console.log(convertToCamelCasing("convert to camel casing"));