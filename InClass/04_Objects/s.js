class Player {

    constructor(id, name) {
        if (name) {
            this._name = name
        } else
            this._name = 'Unknown';
        this._id = id;

    }
}

let p1 = new Player();
console.log(p1);

class People {
    constructor(firstName, lastName) {
        if (firstName) {
            this._firstName = firstName
        } else
            this._firstName = 'Unknown';
        if (lastName) {
            this._lastName = lastName
        } else
            this._lastName = 'Unknown';
    }
    get name(){
        return this._firstName +' '+ this._lastName;
    }
}
let pp = new People("Nine","Assawachin");
console.log(pp.name);