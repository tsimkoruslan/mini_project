//post of user
let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('post'));
//create DOM
let parentDiv = document.createElement('div');
parentDiv.classList.add('ParentDiv')
let title = document.createElement('h1');
title.classList.add('title','animate__animated', 'animate__pulse', 'animate__repeat-3');
let idInfoP = document.createElement('p');
idInfoP.classList.add('idInfoP');
let bodyPost = document.createElement('div');
bodyPost.classList.add('bodyPost','animate__animated', 'animate__pulse', 'animate__repeat-2');

        title.innerText = `"${post.title}"`;
        idInfoP.innerText = `ID - ${post.id} User ID - ${post.userId}`;
        bodyPost.innerText = `⬊ ${post.body} ⬉`;
        parentDiv.append(title,idInfoP,bodyPost);
            document.body.append(parentDiv);
//create comments of post
let divComment  = document.createElement('div');
divComment.classList.add('divComment');
let textComment  = document.createElement('h3');
textComment.innerText = '↓ comments ↓';
document.body.append(textComment);
textComment.classList.add('textComment');
fetch(` https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        for (let comment of comments) {
            let div = document.createElement('div');
            let nameCommentH4 = document.createElement('h4');
            nameCommentH4.classList.add('nameCommentH4','animate__animated', 'animate__pulse', 'animate__repeat-1');
            let bodyCommentP = document.createElement('p');
            bodyCommentP.classList.add('animate__animated', 'animate__pulse', 'animate__repeat-1')
            let email = document.createElement('p');
            email.classList.add('email','animate__animated', 'animate__pulse', 'animate__repeat-1');
                    nameCommentH4.innerText = `${comment.name}`;
                    bodyCommentP.innerText = `"${comment.body}"`;
                    email.innerText = `${comment.email}`;
            div.append(nameCommentH4,bodyCommentP,email);
            div.classList.add('childComment');
            divComment.append(div)
            document.body.append(divComment);
        }

    })



