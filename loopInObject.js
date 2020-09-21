var person = {fname:"John", lname:"Doe", age:25};
var txt = "";
var head = ""
for (x in person) {
  head += x +" ";
  txt += person[x] +" ";
}
console.log(head);
console.log(txt);
