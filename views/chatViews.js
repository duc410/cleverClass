view.showCurrentConversation = function(id) {
    if (model.currentConversation) {
        let messages = model.currentConversation.messages



        let listMessage = document.getElementById('list-message')
        listMessage.innerHTML = ''

        for (let message of messages) {


            let currentUser = firebase.auth().currentUser

            let content = message.content
            let owner = message.owner
            let createAt = message.createAt
            let currentEmail = firebase.auth().currentUser.email
            let className = ''
            if (owner == currentEmail) {
                className = 'message your'
            } else {
                className = 'message other'
            } { /* <i class="fas fa-user-circle" id="iconUser"></i> */ }


            if (displayName === currentUser) {

            }
            updateAvatar();

            let html = `
    <div class="${className} show-message" >
    <div class="show-info"><img  id="myImage" class="myImage" src="https://greenpathcr.com/wp-content/uploads/2019/09/user_circle_1048392.png">
    <div class="none"> <div >${owner}</div>
    <div >${createAt}</div></div></div>
       <span>${content}</span>     
     </div>
  `
            listMessage.innerHTML += html
        }


        // document.getElementById('laugh-show').addEventListener('click', function() {
        //     // listMessage.innerHTML += ` <span class="thumb-up-show"><i class="fas fa-thumbs-up"></i></span>`
        //     let message = {
        //         content: '<i class = "fas fa-thumbs-up"></i>',
        //         owner: firebase.auth().currentUser.email,
        //         createAt: new Date().toISOString()
        //     }
        //     controller.updateNewMessage(model.currentConversation.id, message);
        // })

        listMessage.scrollTop = listMessage.scrollHeight
    }

}

function updateAvatar() {

    let photo = firebase.auth().currentUser.providerData[0].photoURL

    $("#myImage").attr("src", photo)
}