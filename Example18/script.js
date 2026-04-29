// const fetchData = async (url) => {
//     let data = { name: 'sobhan', age: 20 }
//     if (data) {
//         return data
//     } else {
//         throw new Error("this is a error");
//     }
// }

// console.log(fetchData())
// fetchData('google.com')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))









// exam 1

// async function getUser(name, id) {
//     let obj = { name, id }
//     if (obj.id > 0) {
//         return obj.id
//     } else if (obj.id <= 0) {
//         throw new Error(`this is error ${obj.id}`);
//     }
// }

// getUser('sobhan', 1)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))


// getUser('ali', 0)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))


// exam 2

// async function fetchNumber(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num % 2 === 0) {
//                 resolve(num * 2);  // موفقیت
//             } else {
//                 reject(new Error("num is not correct")); // خطا
//             }
//         }, 1000);
//     });
// }

// fetchNumber(3)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// async function test() {
//     try {
//         const result = await fetchNumber(3);
//         console.log("✅ Result:", result);
//     } catch (err) {
//         console.log("❌ Error:", err.message);
//     }
// }

// test();



// exam 3


// async function getUser() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             resolve("Sobhan");
//         }, 1000);
//     });
// }

// async function getPosts() {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             resolve(["post1", "post2", "post3"]);
//         }, 2000);
//     });
// }

// async function fetchUserPosts() {
//     try {
//         const user = await getUser();
//         const posts = await getPosts();
//         console.log(`User: ${user}`);
//         console.log("Posts:", posts);
//     } catch (error) {
//         console.log("❌ Error:", error.message);
//     }
// }

// fetchUserPosts()


// exam 4

// async function step1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(10)
//         }, 1000);
//     })
// }


// async function step2(value) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(value * 2)
//         }, 1000);
//     })
// }

// async function step3(value) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(value + 5)
//         }, 1000);
//     })
// }

// async function main() {
//     try {
//         let s1 = await step1()
//         let s2 = await step2(s1)
//         let s3 = await step3(s2)

//         console.log(s1)
//         console.log(s2)
//         console.log(s3)
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// main()
