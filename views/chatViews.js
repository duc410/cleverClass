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
            let photoURL = '';
            if (owner == currentEmail) {
                className = 'message your'
                photoURL = firebase.auth().currentUser.providerData[0].photoURL
            } else {
                className = 'message other'
                photoURL = controller.avatarChat(owner)

            } { /* <i class="fas fa-user-circle" id="iconUser"></i> */ }


            // if (displayName === currentUser) {

            // }
            // updateAvatar();
            if (!photoURL) photoURL = 'https://cdn2.iconfinder.com/data/icons/user-icon-2-1/100/user_5-15-512.png'

            let html = `
    <div class="${className} show-message" >
    <div class="show-info"><img id="myImage" class="myImage" src="${photoURL}">
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

view.showListMember = function() {
    let listConversation = document.getElementById('list-member')
    listConversation.innerHTML = ""



    // show array model.conversation
    let conversations = model.currentConversation
        // console.log(model.currentConversation.id)

    let users = conversations.users;
    console.log(conversations)

    let userLength = conversations.users.length;
    let member = userLength > 1 ? (userLength + 'members') : (userLength + 'member')
    let html = users.map(user => `     
          <div class="conversation-member-right">${user}</div>
         `)
    listConversation.innerHTML = html

}


view.showListConversation = function() {
    view.showListMember()
    let listConversation = document.getElementById('list-conversation')
    listConversation.innerHTML = ""
    if (model.conversations && model.conversations.length) {
        // show array model.conversation
        let conversations = model.conversations
            //console.log(conversations)
        for (let conversation of conversations) {

            let { id: conversationId, title, users } = conversation
            let user = users.length;


            let member = user > 1 ? (user + 'members') : (user + 'member')

            let className = (model.currentConversation && model.currentConversation.id == conversation.id) ?
                'conversation current' : 'conversation'
            let html = `
           <div class="${className} mt-2">
           <div id="${conversationId}"  id="listConversationToChange">
           <div class="conversation-title"><i class="fas fa-users conversation-icon-group"></i> ${title}</div>
       </div></div>
          `
            listConversation.innerHTML += html
        }

        for (let conversation of conversations) {
            let conversationId = conversation.id
            let conversationCard = document.getElementById(conversationId)
            conversationCard.onclick = function() {
                model.saveCurrentConversation(conversation)
                view.showListConversation()
                view.showCurrentConversation()

            }
        }

    }
}



view.showListStatus = async function() {
    let id = await controller.setupStatus();
    let uid;
    let currentEmail = firebase.auth().currentUser.email

    let listUserStatus = document.getElementById('list-user-status')
    listUserStatus.innerHTML = ""
    if (model.listUserStatus && model.listUserStatus.length) {
        id.map(user => {
            uid = user.id
            console.log(uid)
            let userStatus = model.listUserStatus
            var userStatusFirestoreRef = firebase.firestore().doc('/status/' + uid);

            userStatusFirestoreRef.onSnapshot(function(doc) {


                var isOnline
                let id = doc.id
                isOnline = doc.data().state;

                let srcStatus

                let { id: userId, displayName, photoURL, email } = user
                console.log(userId)

                if (currentEmail === email && isOnline === 'online' && id === userId) {
                    srcStatus = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/600px-Green_sphere.svg.png"
                } else srcStatus = ""


                let html = `       
    <div class="personal">
    <div class="info-personal">
    <img class="avatar-user" src="${photoURL}" >
     <span class="user-name">${displayName}</span>
    </div>
     <span><img class="status " id="user-status" src="${srcStatus}" ></span>
    </div>
          `
                listUserStatus.innerHTML += html

            });
        })


    }

}