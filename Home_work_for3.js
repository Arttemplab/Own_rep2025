function pow(arg1, arg2){
    if(typeof arg1 === "number" && typeof arg2 === "number"){
    let result = 1
      for (let x = 0; x < arg2; x++){
      result *= arg1;
       }  
        console.log(result);
         return result;
        }
}
pow(2,3);

