console.clear();

// POST method Start

// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method: "POST",
//     body: JSON.stringify({
//         title: "FOO",
//         body: "Bar",
//         userID: 2
//     }),
//     headers:{
//         'content-type': 'application/json'
//     }
// })
// .then((res)=>{
//     if(!res.ok){
//         const message = `Error: ${res.status}`;
//         throw new Error(message);
//     }
//     return res.json();
// })
// .then((res)=>console.log(res))
// .catch((error)=>console.log(error));

//post method end


// update method start
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: "PUT",
    body: JSON.stringify({
        id: 1,
        title: "Change",
        body: "CHange",
        userID: 1
    }),
    headers:{
        'content-type': 'application/json'
    }
})
.then((res)=>{
    if(!res.ok){
        const message = `Error: ${res.status}`;
        throw new Error(message);
    }
    return res.json();
})
.then((res)=>console.log(res))
.catch((error)=>console.log(error));

// update method end

