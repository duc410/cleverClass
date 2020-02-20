const model = {
    classrooms: null,
    currentClassroom: null,
    conversations: null, // all conversation user joined
    currentConversation: null, // conversation user selected
}
model.saveClassrooms = function(classrooms) {
    model.classrooms = classrooms
}

model.saveCurrentClassroom = function(classroom) {
    model.currentClassroom = classroom
    // console.log(model.currentclassroom)
}

model.saveConversations = function(conversations) {
    model.conversations = conversations
}

model.saveCurrentConversation = function(conversation) {
    model.currentConversation = conversation
}