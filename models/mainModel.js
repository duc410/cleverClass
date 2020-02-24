const model = {
    classrooms: null,
    currentClassroom: null,
    conversations: null, // all conversation user joined
    currentConversation: null, // conversation user selected
    listUserStatus: null,
    currentUserId: null,
    dataUser: null,
}
model.saveClassrooms = function(classrooms) {
    model.classrooms = classrooms
}

model.saveCurrentClassroom = function(classroom) {
    model.currentClassroom = classroom
}

model.saveConversations = function(conversations) {
    model.conversations = conversations
}

model.saveCurrentConversation = function(conversation) {
    model.currentConversation = conversation
}
model.saveListUserStatus = function(user) {
    model.listUserStatus = user
}
model.saveCurrentUserId = function(user) {
    model.currentUserId = user
}
model.saveDataUser = function(user) {
    model.dataUser = user
}