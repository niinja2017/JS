let list = [1, 'hesam', 'ali', false, 2]

let item1 = list[0]
let item2 = list[1]
let item3 = list[2]


let [item4, item5, item6] = list
let [item7 = 0, item8 = 'ali', item9 = 2] = list
console.log(item8)


//////////////////////////////////////////////////

let obj = {
    name: 'sobhan',
    age: 20,
    foo: () => { return 'hello' }
}

let { name : myname, age, foo } = obj

console.log(myname ,age ,foo())
