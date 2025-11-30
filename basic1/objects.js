const user={
    username:"hc",
    "first Name":"hitesh",
    name:"chandra",
    email:"h@hc.com",
    age:20,
    isAdmin:false,
    isLoggedIn:true,
    tea:["lemon","peach","ginger"],
    address: {
        city: "jaipur",
        state:"Rajasthan"
    }
}
 
// console.log(user.age);
// console.log(user['age'])
// console.log(user.tea[1])
// console.log(user.address.state);
// console.log(user['address']['state'])
// const anotherUser=user;
// user.email="hitesh@pw.live"
// console.log(user);
// console.log(anotherUser)

delete user.isAdmin;
const userListFromDatabase = [{},{},{}]
console.log(user.keyboard);

// console.log(Object.keys(user))
// console.log(Object.values(user));
// console.log(Object.entries(user));
console.log(user.hasOwnProperty('tea'));





