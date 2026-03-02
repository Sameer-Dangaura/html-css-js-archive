//-> This is for the hands on practice for getter and setter which is discussed at the end part in "1_intro.md" 


class Car {
  constructor(brand) {
    this.carname = brand;   // ✅ triggers setter
    console.log("Inside constructor:", this.carname);
  }
  get carname() {
    return this._carname;
    console.log("Inside getter:", this._carname); //This will not going work, because it is after return statement. 
  }
  set carname(x) {
    this._carname = x; // ✅ creates the internal property
    console.log("Inside setter:", this._carname); 
  }
}

//➡️ Object created automatically called by of constructor:
const myCar = new Car("Ford"); 

// ✅ triggers setter:
myCar.carname = "Volvo";

// ✅ triggers getter, since     _carname    is only the internal property here:
console.log("Returned by getter:", myCar.carname);

/* outputs: 
Inside setter: Ford
Inside constructor: Ford
Inside setter: Volvo
Returned by getter: Volvo
*/

