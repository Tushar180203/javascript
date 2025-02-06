
function baharWala(){
    var name="tushar";

    function anderWala(){
        console.log(name);
    }
   //let name="tusharSher"
    return anderWala;
}

// console.log(baharWala());
const fun=baharWala();                      //idhar function call hua toh fun m value jaane ke baad stack se hat jayega name 
console.log(fun());                          // toh ab jab hum idhar call karenge function ko toh let name ki value toh stack se nikal jaani chahiye thi 
                                            // pr idhar yehi kaam hai closure ka ki jab bhi nested function call hote h toh naem ki value nested function ke sath bind krdi 
                                            // toh isse kya hua ki value ab binded hai toh ab vo stack se hatne ke baad bhi value binded rhegi 
