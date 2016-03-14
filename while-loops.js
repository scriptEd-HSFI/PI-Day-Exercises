var zeroToNine = []; 

for (var i=0; i<10; i++) {
    zeroToNine.push(i);  
}




var i = 0; 
while (i<10) {
    console.log(i);
    i++; 
}


Math.ceil(4.5); 
Math.floor(4.5); 
Math.random()*100

var i = 0; 
var numbers = []; 
while (i<6) {
    var number = Math.ceil(Math.random()*60); 
    numbers.push(number); 
    i++; 
}

var supermarket = {
    name: "Stop & Shop",
    selling: ['fruits', 'meats', 'cereal', 'ice cream'],
    inStock: function(item) { 
        if (this.selling.indexOf(item) !== -1) {
            return true; 
        } else {
            return false; 
        }
    }
    
}

