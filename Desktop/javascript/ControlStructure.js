// if else statements
let a=20,b=30;
if(a > b) {
    console.log("A bada");
  } else {
    console.log("B bada");
  }
//switch case
let x=0;
switch (x) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day);

//loop
for (let i = 0; i < 5; i++) {
    console.log(i);  //simple for loop
  }

  let i = 0;
    while (i < 5) {
      console.log(i); //simple while loop
      i++;
    }

    //for of loop

    const car = ["BMW", "defender", "sher"];
    for(let a of car)console.log(a);

    

    let  test = { first: "one", second:"second"}

//     for(var item of test) {
//       console.log(item)
//     }


//for in loop

for(let a in car)console.log(car[a]);
for (let b in test)console.log(test[b]);