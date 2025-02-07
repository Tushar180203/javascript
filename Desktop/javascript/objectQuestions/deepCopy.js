
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}


const obj = { a: 1, b: { c: 2 } };
const a = clone(obj);

console.log(a);