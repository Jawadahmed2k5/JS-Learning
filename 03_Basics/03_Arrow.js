const user = {
    username: "jawad",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function jd(){
//     let username = "jawad"
//     console.log(this.username);
// }

// jd()

// const jd = function () {
//     let username = "jawad"
//     console.log(this.username);
// }

const jd =  () => {
    let username = "jawad"
    console.log(this);
}


// jd()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "jawad"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()