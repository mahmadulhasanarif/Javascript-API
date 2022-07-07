console.clear();
const makeRequest = (config) =>{
    return axios(config)
}

const createData = () =>{
    makeRequest({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "post",
        body: JSON.stringify({
            title: "this is title",
            body: "this is body part",
            userID: 1
        })
    })
    .then((res)=>console.log(res))
    .catch((error)=>console.log(error));
}

createData();


// const getData = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>console.log(res.data))
//     .catch((error)=>console.log(error));
// }

// getData();