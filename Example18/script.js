const fetchData = async(url) => {
    let data = {name : 'sobhan' , age : 20}
    if (data) {
        return data
    } else {
        throw new Error("this is a error");
    }
}


fetchData('google.com')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
