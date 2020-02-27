function navbarEvent() {
    let userName = firebase.auth().currentUser.providerData[0].displayName
        // Get the displayName of user in firebase
    let displayName = document.getElementById('displayName')
    $("#avatarName").html(userName)

    $("#home").click(function() {
        view.showComponents("personal")
    })

    displayName.innerHTML = userName

    var user = firebase.auth().currentUser;


    let fastChat = document.getElementById('fastChat')
    fastChat.onclick = fastChatHandlerClick

    function fastChatHandlerClick() {
        view.showComponents('chats')
    }


    // Sign out account
    $("#log-out").click(async function() {

        firebase.auth().signOut()

    })


    $("#account-setting").click(function() {
            view.showComponents('account')
        }

    )


    async function readURL(input) {
        await controller.loadListUserStatus();
        let id = model.currentUserId

        if (input.files && input.files[0]) {
            console.log(input.files[0])
            let file = input.files[0]

            let link = await upload(file)
            console.log(link)

            await user.updateProfile({
                photoURL: link
            }).then(async function() {
                view.showComponents("account")
                console.log("success")

            }).catch(function(error) {
                console.log(error)
            });
            await firebase.firestore().collection('users').doc(id).update({
                photoURL: link

            })

        }
    }
    let photoURL = firebase.auth().currentUser.providerData[0].photoURL

    if (!photoURL) photoURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png'

    $("#dropdownMenuButton").attr("src", photoURL)
    $("#avatar").attr("src", photoURL)
        // function upload avatar

    async function upload(file) {
        let fileName = file.name;
        let filePath = `photoURL/${fileName}`;
        let fileRef = firebase.storage().ref().child(filePath)

        await fileRef.put(file)
        let photoURL = getFileURl(fileRef)
        return photoURL

    }

    function getFileURl(fileRef) {
        return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullPath)}?alt=media`

    }


    $("#files").change(function() {
        readURL(this);
    })




}



function navbarEventForChats() {
    let userName = firebase.auth().currentUser.providerData[0].displayName
        // Get the displayName of user in firebase
    let displayName = document.getElementById('displayName')
    $("#form-search").css("display", "block");
    $("#avatarName").html(userName)

    $("#home").click(function() {
        view.showComponents("personal")
    })

    displayName.innerHTML = userName

    var user = firebase.auth().currentUser;


    let fastChat = document.getElementById('fastChat')
    fastChat.onclick = fastChatHandlerClick

    function fastChatHandlerClick() {
        view.showComponents('chats')
    }


    // Sign out account
    $("#log-out").click(async function() {

        firebase.auth().signOut()

    })


    $("#account-setting").click(function() {
            view.showComponents('account')
        }

    )


    async function readURL(input) {
        await controller.loadListUserStatus();
        let id = model.currentUserId

        if (input.files && input.files[0]) {
            console.log(input.files[0])
            let file = input.files[0]

            let link = await upload(file)
            console.log(link)

            await user.updateProfile({
                photoURL: link
            }).then(async function() {
                view.showComponents("account")
                console.log("success")

            }).catch(function(error) {
                console.log(error)
            });
            await firebase.firestore().collection('users').doc(id).update({
                photoURL: link

            })

        }
    }
    let photoURL = firebase.auth().currentUser.providerData[0].photoURL

    if (!photoURL) photoURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png'

    $("#dropdownMenuButton").attr("src", photoURL)
    $("#avatar").attr("src", photoURL)
        // function upload avatar

    async function upload(file) {
        let fileName = file.name;
        let filePath = `photoURL/${fileName}`;
        let fileRef = firebase.storage().ref().child(filePath)

        await fileRef.put(file)
        let photoURL = getFileURl(fileRef)
        return photoURL

    }

    function getFileURl(fileRef) {
        return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullPath)}?alt=media`

    }


    $("#files").change(function() {
        readURL(this);
    })




}