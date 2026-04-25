// function doSomething() {
//     let name = 'hesam'

//     return Promise.reject('this is error')
//     return Promise.resolve(name)
// }

// doSomething()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

/////////////////////////////////////////////////////

// let promise1 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         reject('rejected')
//     }, 2000);
// })

// let num2 = 30

// let promise3 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve('resolve')
//     }, 1000);
// })

// Promise.all([promise1 , num2 , promise3])
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))




// exam 1
// function task1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('task1 done')
//         }, 1000);
//     })
// }
// function task2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('task2 done')
//         }, 1500);
//     })
// }
// function task3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('task3 done')
//         }, 500);
//     })
// }

// Promise.all([task1() , task2() , task3()])
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
