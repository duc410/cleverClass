controller.listPost = async function() {

    let result = await firebase
        .firestore()
        .collection('posts')
        .get()

    let posts = transformDocs(result.docs)

    model.saveListPosts(posts)


}
controller.addNewPost = async function(postContent) {
    let content = postContent.content;
    let image = postContent.image;
    let currentEmail = firebase.auth().currentUser.email


    let data = {
        content: content,
        image: image,
        emailPost: currentEmail
    }

    await firebase.firestore().collection('posts').add(data)

}




async function uploadPostImage(file) {
    let fileName = file.name;
    console.log(fileName)
    let filePath = `postImage/${fileName}`;
    let fileRef = firebase.storage().ref().child(filePath)

    await fileRef.put(file)
    let photoURL = getFileURl(fileRef)
    return photoURL

}


function getFileURl(fileRef) {
    return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullPath)}?alt=media`

}