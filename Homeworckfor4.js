function checkProbabilityTheory(count){
  let odd = 0;
  let even = 0;
  for (let x = 0; x < count; x++){
   let randomNumber = Math.floor(Math.random() * (1000 -100+1)) + 100;;
   if(randomNumber % 2 === 0){
    even++;
   }
   else 
    odd ++;
}

let procofOdd = ( (odd / count) * 100);
let procofEven = ( (even / count) * 100);
console.log("Count random numbers :" , count);
console.log("Count odd numbers :" , odd);
console.log("Count even numbers :" , even)
console.log("Percentage of odd numbers :" , procofOdd ) ;
console.log("Percentage of even numbers :" , procofEven );
}


checkProbabilityTheory(200);