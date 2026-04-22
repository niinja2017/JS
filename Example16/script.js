// console.log('run 1')
// console.log('run 2')
// console.log('run 3')
// ////////////////////////// Synchronous
// function doSomething() {
//     setTimeout(() => {
//         console.log('run 2')
//     }, 1000);
// }
// console.log('run 1')
// doSomething()
// console.log('run 3')
//////////////////////////////
// function doSomething() {
//     setTimeout(() => {
//         return 'run 2'
//     }, 1000);
// }
// console.log('run 1')
// console.log(doSomething())
// console.log('run 3')
///////////////////////////////
// function doSomething(callback) {
//     setTimeout(() => {
//         return callback('run 2')
//     }, 1000);
// }
// console.log('run 1')
// doSomething(function (data) { console.log(data) })
// console.log('run 3')
///////////////////////////////

// doSomething(function (data1) {
//     console.log(data1)
//     doSomething(function (data2) {
//         console.log(data2)
//         doSomething(function (data3) {
//             console.log(data3)
//         })
//     })
// })

///////////////////////////////////////////////// Promise

// let pro = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('run 2');
//         reject('this is an error');
//     }, 2000);
// })

// console.log('run 1')
// pro
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// console.log('run 3')

//////////////////////////////////////////////////



// exam 1
// function waitAndLog(ms) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`done after ${ms} ms`)
//         }, ms);
//     })

//     return promise
// }

// waitAndLog(1000)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))


//////////////////////////////////////////////////

// exam 2
// function fakeRequest(url) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (url.length > 5) {
//                 resolve(`Ok : ${url}`)
//             } else {
//                 reject(`Error: url too short`)
//             }
//         }, 500);
//     })

//     return promise
// }

// fakeRequest('google.com')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))


// exam 3

// function doSomethingCallback(callback) {
//     setTimeout(() => {
//         callback('done');
//     }, 1000);
// }

// function doSomethingAsync(data) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(data)
//         }, 1000);
//     })
//     return promise
// }
// doSomethingAsync('done')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// exam 4

// function addOneAsync(number) {
//     let promise = new Promise((resolve , reject) => {
//         setTimeout(() => {
//             resolve(number + 1)
//         }, 500);
//     })

//     return promise
// }

// addOneAsync(1)
//     .then(result => {
//         console.log(result);
//         return addOneAsync(result);
//     })
//     .then(result => {
//         console.log(result);
//         return addOneAsync(result);
//     })
//     .then(result => {
//         console.log(result);
//     });
