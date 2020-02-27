view.showListPosts = async function() {
    let showListPost = document.getElementById("show-list-post")
    let photoCurrentUserCmt = firebase.auth().currentUser.providerData[0].photoURL;
    showListPost.innerHTML = ''
    let posts = model.listPosts
    infoUsers = model.listUserStatus;
    let photo;
    let name;
    let html;
    // console.log(posts)

    if (posts) {

        for (let post of posts) {
            // console.log(post)
            let { emailPost, image, content, createAt } = post
            // console.log(image)
            // console.log(content)

            for (let infoUser of infoUsers) {

                let { displayName, photoURL, email } = infoUser;
                // console.log(emailPost)
                // console.log(email)
                // console.log(createAt)

                if (emailPost === email) {
                    photo = photoURL
                    name = displayName


                }
                if (!image) {
                    classNameImg = "visibleClass"

                } else {
                    classNameImg = "img-fluid mt-4"
                    idCollapse = image
                }

                if (!content) {
                    classNameContent = "visibleClass"
                } else {
                    classNameContent = ""
                    idCollapse = content
                }
                html = `
           
<div class="card shadow post-view" >
<div class="info-view-post">
<div class="nav-post d-flex">
<img src="${photo}" class="card-img-top-post-view" alt="..." >
<div>
<div class="nav-name">${name}</div>
<span class="time-post">${moment(createAt).fromNow()}</span>
</div>
</div>

</div>
<div class="card-body">
<div class="${classNameContent}" >${content}</div>
<img class="${classNameImg}" src="${image}">

<div class="mt-3">
<hr/>
<button type="button" class="btn btn-light">  <i class="far fa-thumbs-up"></i> Like</button>
<button type="button" class="btn btn-light" data-toggle="collapse" data-target="#${idCollapse}" aria-expanded="false" aria-controls="${idCollapse}">  <i class="fas fa-comments"></i> Comment</button>
</div>

<div class="comment-post mt-3 collapse" id="${idCollapse}">
<hr/>
<img class="avatar-user mt-1 mr-1" src="${photoCurrentUserCmt}" >
<form class="form-group card form-add-comment">
  <input type="text"
    class="form-control form-add-comment-post" name="" id="" aria-describedby="helpId" placeholder="Write a comment...">
</form>
</div>


</div>
</div>

            `

            }
            showListPost.innerHTML += html

        }
        showListPost.scrollTop = showListPost.scrollHeight
    }

}



view.showNewPosts = function(post) {
    let showListPost = document.getElementById("show-list-post")
    infoUsers = model.listUserStatus;
    let photo;
    let name;
    let html;
    // console.log(posts)
    // console.log(post)
    if (post) {

        let { emailPost, image, content, createAt } = post
        // console.log(image)
        // console.log(content)

        for (let infoUser of infoUsers) {

            let { displayName, photoURL, email } = infoUser;
            // console.log(emailPost)
            // console.log(email)
            // console.log(createAt)

            if (emailPost === email) {
                photo = photoURL
                name = displayName


            }
            if (!image) {
                classNameImg = "visibleClass"
            } else classNameImg = "img-fluid mt-4"

            if (!content) {
                classNameContent = "visibleClass"
            } else classNameContent = ""

            html = `
            <div class="card shadow post-view" >
<div class="info-view-post">
<div class="nav-post d-flex">
<img src="${photo}" class="card-img-top-post-view" alt="..." >
<div>
<div class="nav-name">${name}</div>
<span class="time-post">${moment(createAt).fromNow()}</span>
</div>
</div>

</div>
  <div class="card-body">
  <div class="${classNameContent}" >${content}</div>
<img class="${classNameImg}" src="${image}">

   <div class="mt-3 ">
   <hr/>
   <button type="button" class="btn btn-light">  <i class="far fa-thumbs-up"></i> Like</button>
  <button type="button" class="btn btn-light">  <i class="fas fa-comments"></i> Comment</button>
   </div>
</div>
<div class="comment-post">
<img class="avatar-user" src="" id="avatar-comment-post" >
<span class="card"></span>
  </div>

 


            `

        }
        showListPost.innerHTML += html


        showListPost.scrollTop = showListPost.scrollHeight
    }

}