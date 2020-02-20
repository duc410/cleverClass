controller.loadConversations = async function() {
    let currentEmail = firebase.auth().currentUser.email
    let result = await firebase
        .firestore()
        .collection('conversations')
        .where('users', 'array-contains', currentEmail)
        .get()

    let conversations = transformDocs(result.docs)

    model.saveConversations(conversations)
    if (conversations.length) {
        let currentConversation = conversations[0]
        model.saveCurrentConversation(currentConversation)
    }
}

controller.setupDatabaseChange = function() {
    let currentEmail = firebase.auth().currentUser.email
    let isFirstRun = true

    firebase.firestore().collection('conversations').where('users', 'array-contains', currentEmail).onSnapshot(function(snapshot) {
        if (isFirstRun) {
            isFirstRun = false
            return
        }
        let docChanges = snapshot.docChanges()
        for (docChange of docChanges) {
            if (docChange.type == "modified") {
                let conversationChange = transformDoc(docChange.doc)
                    // console.log('new', conversationChange)
                    // console.log('old', model.currentConversation)
                    // update model.conversation
                    //update model.current-conversation
                model.updateConversation(conversationChange)
                view.showCurrentConversation()

            }
        }

    })
}

controller.updateNewMessage = function(conversationId, message) {
    return firebase.firestore().collection('conversations').doc(conversationId).update({
        messages: firebase.firestore.FieldValue.arrayUnion(message)
    })
}
controller.validateEmailExists = async function(email) {
    try {
        let signInMethod = await firebase.auth().fetchSignInMethodsForEmail(email)
        return signInMethod.length > 0
    } catch (error) {
        return false
    }

}