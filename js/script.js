document.querySelector(".showAllPosts").addEventListener('click',showAllPosts);
document.querySelector(".displayAllUsers").addEventListener('click',displayAllUsers);


function showAllPosts(e){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {

            let output=document.querySelector(".output");
            output.innerHTML=`<h2>Posts: ${data.length}</h2>`;
            data.forEach(post => {
                output.innerHTML +=`<div class="post">
                            <h4>${post.title}</h4><hr>
                            <p>${post.body}</p>
                        </div>`;
            });
        });
}


function displayAllUsers(e){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {

            let output=document.querySelector(".output");
            output.innerHTML=`<h2>Users: ${data.length}</h2>`;
            data.forEach(user => {
                output.innerHTML +=`<div class="post">
                            <h4>${user.name}</h4><hr>
                            <p>id: ${user.id}</p>
                            <p>email: ${user.email}</p>
                        </div>`;
            });
        });
}
