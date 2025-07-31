var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    
    totalPrice() {
      let totalPrice = 0;
      for(let key in this) {
        if (typeof this[key] !== "function") {
            totalPrice += Number.parseFloat(this[key].split(" ")[0]);
                    }
      }
      return totalPrice;  
        },
        maxPrice() {
            let maximum = 0;
            for(let key in this){
                if (typeof this[key] !== "function"){
                    let price = Number.parseFloat(this[key].split(" ")[0]);
                    if( price > maximum){
                        maximum = price;
                    }
                }

            }
            return maximum
        } ,
        minPrice() {
            let minimum = Infinity;
            for(let key in this){
                if (typeof this[key] !== "function"){
                    let price = Number.parseFloat(this[key].split(" ")[0]);
                    if( price < minimum){
                        minimum = price;
                    }
                }

            }
            return minimum
        } 
    
      
};
// The service "Розбите скло" can be added or not:
//services["Розбите скло"] = "200 грн"; // uncomment to add
console.log(services.maxPrice());
console.log(services.minPrice());
console.log(services.totalPrice());