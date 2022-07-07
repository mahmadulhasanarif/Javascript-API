console.clear();
const makeRequest = (method, url, data) =>{
    let xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8',);
    
    xhr.onload = () =>{
        let data = xhr.response;
        console.log(JSON.parse(data));
    }

    xhr.onerror = ()=>{
        console.log("ERROR IS HERE!");
    }
    xhr.send(JSON.stringify(data));

}



const getData = () =>{
    makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
}
getData();
const sendData = () =>{
    makeRequest("POST", "https://jsonplaceholder.typicode.com/posts",
    {
        title: 'THIS IS TITLE',
        body: 'THsi si body title',
        userId: 1,
    } 
    )
}

const updateData = () =>{
    makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1",{
        title: "THIS IS FIRST TITLE",
        body: "THIS IS CHADDI 1"
    })
}

const updateAllData =() =>{
    makeRequest("PUT","https://jsonplaceholder.typicode.com/posts/1",{
        title: "THIS IS NO TITLE",
        body: "THIS IS THE BODY PART",
    })
}

const deleteData = () =>{
    makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
}