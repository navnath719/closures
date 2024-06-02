
function Counter(){
    let count = 0;
    this.incerementCounter = function (){
        count++;
        console.log(count)
    };
    this.decrementCounter = function(){
        count--;
        console.log(count)
    }
}

let counter1 = new Counter();

counter1.incerementCounter();
counter1.incerementCounter();
counter1.decrementCounter();

