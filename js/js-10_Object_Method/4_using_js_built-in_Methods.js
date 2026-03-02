//-> Using JavaScript Methods
//-> :
//->  This example uses the JavaScript's built-in   
//       toUpperCase()      method to convert a text to uppercase:

const person = {
    firstName: "Rock",
    lastName: "Joshi",
    age: 30,
    fullName: function(){
            return (this.firstName + " " + this.lastName).toUpperCase();
    }
};

console.log(person.fullName()); //outputs: ROCK JOSHI
