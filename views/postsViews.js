view.showListPosts = async function() {
    let showListPost = document.getElementById("show-list-post")
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
            let { emailPost, image, content } = post
            // console.log(image)
            // console.log(content)

            for (let infoUser of infoUsers) {

                let { displayName, photoURL, email } = infoUser;
                // console.log(emailPost)
                // console.log(email)

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
<img src="${photo}" class="card-img-top-post-view" alt="..." >
<span>${name}</span>
</div>
  <div class="card-body">
  <div class="${classNameContent}" >${content}</div>
<img class="${classNameImg}" src="${image}">
   <div class="mt-3">
   <button type="button" class="btn btn-light">  <i class="far fa-thumbs-up"></i> Like</button>
  <button type="button" class="btn btn-light">  <i class="fas fa-comments"></i> Comment</button>
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

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#image").change(function() {
    readURL(this);
});