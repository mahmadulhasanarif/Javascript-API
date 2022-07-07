console.clear();

// put method
axios.put('https://jsonplaceholder.typicode.com/posts/1',{
    body:JSON.stringify({
        title: "FOO",
        body: "THIS IS BODY",
        userID: 1
    })
})
.then((res)=>console.log(res.data))
.catch((err)=>console.log(err))

// post method
// axios.post('https://jsonplaceholder.typicode.com/posts',{
//     body:JSON.stringify({
//         title: "FOO",
//         body: "THIS IS BODY",
//         userID: 1
//     })
// })
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err))

// get method

// axios.get('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err))