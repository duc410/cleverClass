view.showCurrentConversation = function(id) {
    if (model.currentConversation && model.listUserStatus) {
        let messages = model.currentConversation.messages
        let userArray = model.currentConversation.users
        infoUsers = model.listUserStatus

        let currentEmail = firebase.auth().currentUser.email

        let listMessage = document.getElementById('list-message')
        listMessage.innerHTML = ''

        for (let message of messages) {


            let photo;
            let name;
            let html


            let currentUser = firebase.auth().currentUser

            let content = message.content
            let owner = message.owner

            let className = ''
            if (owner == currentEmail) {
                className = 'message your'

            } else {
                className = 'message other'


            }
            for (let infoUser of infoUsers) {

                let { displayName, photoURL, email } = infoUser;

                userArray.map(user => {
                    if (owner === email) {
                        photo = photoURL
                        name = displayName
                    }

                })


                html = `
    <div class="${className} show-message"  >
    <div class="show-info"><img id="myImage" class="myImage" src="${photo}">
    <div class="none"> <div >${name}</div>
    </div></div>
       <span>${content}</span>     
     </div>
  `
            }
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
    let listConversation = document.getElementById('listMember')


    infoUsers = model.listUserStatus


    // show array model.conversation
    let conversations = model.currentConversation
        // console.log(model.currentConversation.id)
    let html;
    let photo;
    let name;
    let users = conversations.users;
    console.log(infoUsers)
    console.log(users)
    for (let infoUser of infoUsers) {
        let { displayName, photoURL, email } = infoUser;
        users.map(user => {
            // console.log(user)


            if (user === email) {
                photo = photoURL
                    // console.log(photo)
                name = displayName
                    // console.log(name)

                html += `   
          <div class="conversation-member-right">
           <img class="avatar-member" src="${photo}">
             ${name}</div>
         `
            }
        })
    }


    listConversation.innerHTML = html

}


view.showListConversation = function() {
    view.showListMember()
    let listConversation = document.getElementById('list-conversation')
    listConversation.innerHTML = ""
    if (model.conversations && model.conversations.length) {
        // show array model.conversation
        let conversations = model.conversations

        for (let conversation of conversations) {

            let { id: conversationId, title, users } = conversation
            let user = users.length;


            let member = user > 1 ? (user + 'members') : (user + 'member')

            let className = (model.currentConversation && model.currentConversation.id == conversation.id) ?
                'conversation current' : 'conversation'
            let html = `
           <div class="${className} mt-2" data-toggle="collapse" data-target="#collapseMessage" aria-expanded="false" aria-controls="collapseMessage">
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
    let html;
    let currentEmail = firebase.auth().currentUser.email
    let listUserStatus = document.getElementById('list-user-status')
    listUserStatus.innerHTML = ""
    if (model.listUserStatus && model.listUserStatus.length) {
        id.map(user => {

            uid = user.id
            var userStatusFirestoreRef = firebase.firestore().doc('/status/' + uid);
            userStatusFirestoreRef.onSnapshot(async function(doc) {

                var isOnline
                let id = doc.id

                isOnline = "online"
                    // await doc.data().state;
                console.log(isOnline)

                let srcStatus

                let { id: userId, displayName, photoURL, email } = user
                console.log(userId)

                if (currentEmail === email && isOnline === 'online' && id === userId) {
                    srcStatus = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/600px-Green_sphere.svg.png"
                    await $("#user-status").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/600px-Green_sphere.svg.png")
                    html = `       
                    <div class="personal">
                    <div class="info-personal">
                    <img class="avatar-user" src="${photoURL}" >
                     <span class="user-name">${displayName}</span>
                    </div>
                     <span><img class="status " id="user-status" src="${srcStatus}" ></span>
                    </div>
                          `
                } else {
                    html = `       
    <div class="personal">
    <div class="info-personal">
    <img class="avatar-user" src="${photoURL}" >
     <span class="user-name">${displayName}</span>
    </div>
     <span><img class="status " id="user-status" src="" ></span>
    </div>
          `
                }
                listUserStatus.innerHTML += html

            });
        })


    }

}