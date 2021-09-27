var friendsAge = [15, 17, 14, 19];
console.log(friendsAge[0]);

var position = friendsAge.indexOf(19);
console.log(position);


//Advanced
 console.log(friendsAge);
 console.log(friendsAge.length);

 friendsAge.push(20, 22); //add end
 console.log(friendsAge);
 console.log(friendsAge.length);

 friendsAge.pop(); // remove from end
 console.log(friendsAge);

friendsAge.shift(); // remove from beginning
console.log(friendsAge);

friendsAge.unshift(13); //add brginning
console.log(friendsAge);


var part = friendsAge.slice(2, 4);
console.log(part);

var part2 = friendsAge.splice(2,4);
console.log(part2);