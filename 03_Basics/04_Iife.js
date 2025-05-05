// Immediately Invoked Function Expressions (IIFE)


(function JD(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Jawad')

