var student ={id:121, phone:1234, name: "abir"};
var student2 ={id:133, phone:12334, name: "mahi"};

console.log(student);
console.log(student2);

var phoneNo =student["phone"];
console.log(phoneNo);

student2.phone =8765; //update phone nub
student2["phone"]=999999; //update phone nub
var phoneNo2 = student2.phone;
console.log(phoneNo2);

student2.cinema ="ogni2";// add property
student2["cinema"]="ogni2"; // add property

console.log(student2);