//-> External script file for example to demonstrating the adding mechanism using array.push() method: 

const myPlayers = ["Ronaldo", " Messi", " Neymar"];

document.getElementById("demo").innerHTML = myPlayers;  
//-> Setting an array(i.e. myPlayers) to the element whose id="demo" with the help of   .innerHTML .


//-> myFunction() is gonna called by button element in index.html file if the user clicks it.
function myFunction() {

    myPlayers.push(" Mbappe");   //added new element to an array.

    document.getElementById("demo").innerHTML = myPlayers;
//-> Setting an updated array(i.e. myPlayers) to the element whose id="demo" with the help of   .innerHTML .

}

