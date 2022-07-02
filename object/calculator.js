const calculator = {
     result : 0,

     add : function(n = 0){
        this.result = this.result + n
        return this.result
     },
     minus : function(n = 0){
         this.result = this.result - n
         return this.result
     },
     multiply : function(n = 1){
        this.result = this.result*n
        return this.result
     },
     division : function(n = 1){
         this.result = this.result/n
         return this.result
     },
     reset : function(){
         this.result = 0
         return this.result
     }
    
}

console.log(calculator.add(5))
console.log(calculator.add(10))
console.log(calculator.minus(3))
console.log(calculator.multiply(2))
console.log(calculator.division(8))
console.log(calculator.reset())