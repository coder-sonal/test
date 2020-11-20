class Car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age(){
        let date = new Date();
        let age = date.getFullYear()-this.year;
        return age;
    }
}
let myCar = new Car("Hundai",2017);
document.getElementById("root").innerHTML = "My Car is " + myCar.age() +" years old.";
document.getElementById("root").setAttribute("style", "font-size:50px")