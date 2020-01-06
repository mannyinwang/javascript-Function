var users = [
    {name: "Michael", age:37}, 
    {name: "John", age:30}, 
    {name: "David", age:27}
];

// Questions:
// How would you print/log John's age?
// How would you print/log the name of the first object?
// How would you print/log the name and age of each user using a for loop?  

// Solution
// 1
console.log(users[1].age);

// 2
console.log(users[0].name);

// 3
for(var user in users){
    console.log(users[user].name +" - "+ users[user].age);
}