controller.loadClassroom = async function() {
    //get all classes form firebase
    let currentEmail = 'trinhtrang27112000@gmail.com'
    let result = await firebase
        .firestore()
        .collection('Classrooms')
        .where('members', 'array-contains', currentEmail)
        .get()
    let classes = transformDocs(result.docs)

    //save classes to model
    model.saveClassrooms(classes)
    if (classes.length > 0) {
        model.saveCurrentClassroom(classes[0])
    }
}

controller.addClassroom = function(classroom) {
    console.log('add firebase')
    return firebase
        .firestore()
        .collection('Classrooms')
        .add(classroom)
}

controller.setupDatabaseClassroomChange = function() {
    let currentEmail = firebase.auth().currentUser.email
    let isFirstRun = true
    firebase
        .firestore()
        .collection('Classrooms')
        .where('members', 'array-contains', currentEmail)
        .onSnapshot(function(snapshot) {
            if (isFirstRun) {
                isFirstRun = false
                return
            }
            let docChanges = snapshot.docChanges()
            for (let docChange of docChanges) {
                if (docChange.type == 'added') {
                    let classroomChange = controller.transformDoc(docChange.doc)
                    model.updateClassroom(classroomChange)
                }
            }
        })
}