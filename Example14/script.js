// let list = [1, 'hesam', 'ali', false, 2]

// let item1 = list[0]
// let item2 = list[1]
// let item3 = list[2]


// let [item4, item5, item6] = list
// let [item7 = 0, item8 = 'ali', item9 = 2] = list
// console.log(item8)


////////////////////////////////////////////////// Destructuring

// let obj = {
//     name: 'sobhan',
//     age: 20,
//     foo: () => { return 'hello' }
// }

// let { name : myname, age, foo } = obj

// console.log(myname ,age ,foo())



// exam 1
// const colors = ["قرمز", "سبز", "آبی", "زرد"];

// let [color1 , color2 , color3 , fourthColor] = colors
// console.log(color1 , color2 , color3, fourthColor)

// exam 2
// const numbers = [10 , 20];

// let [firstNum , secondNum , thirdNum = 30 , fourthNum = 40] = numbers
// console.log(firstNum , secondNum , thirdNum , fourthNum)

// exam 3
// const person = {
//     firstName : "علی",
//     lastName : "رضایی",
//     city : "تهران"
// }

// let {firstName : name , city : location1} = person
// console.log(name , location1)
// exam 4
// const car = {
//     make: "ایران خودرو",
//     model: "سمند",
//     year: 2022,
//     color: "سفید"
// };

// let { make: company, model, year: manufactureYear, price: carPrice = '250,000,000' } = car
// console.log(company, model, manufactureYear, carPrice)
// exam 5
// const userProfile = {
//     id: 123,
//     details: {
//         name: "مریم",
//         contact: {
//             email: "maryam@example.com",
//             phone: "09123456789"
//         }
//     }
// };

// let { details: { name, contact: { email } } } = userProfile
// console.log(name , email)
