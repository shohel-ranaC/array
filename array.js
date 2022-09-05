let friendsAge = [20, 30, 23, 27, 25, 40];

let position = friendsAge.indexOf(30);
let sonaliAge = friendsAge[1] = 50;
// console.log(friendsAge.length);
 friendsAge.push(60);
 friendsAge.push(70);
 friendsAge.push(80);

 friendsAge.pop(80);

 friendsAge.unshift(90);
 friendsAge.unshift(100);

 friendsAge.shift(100);

 let remove = friendsAge.slice(2, 5);
 let remove2 = friendsAge.splice(2, 5);
 //let remove3 = friendsAge.split(2, 5);

 console.log(remove2);
