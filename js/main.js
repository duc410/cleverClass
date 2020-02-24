window.onload = init

function init() {


    // const db = firebase.firestore();

    // const usersRef = db.collection('users'); // Get a reference to the Users collection;
    // let userId = "oxn04Vr5YTfcahcIgb3Y"
    // var connectedRef = firebase.database().ref(".info/connected");


    // connectedRef.on("value", async function(snap) {
    //     if (snap.val() === true) {
    //         alert("connected");
    //         usersRef
    //             .doc(userId)
    //             .set({
    //                 online: true,
    //             })

    //     } else {
    //         var presenceRef = firebase.database().ref("disconnectmessage");
    //         // Write a string when this client loses connection
    //         presenceRef.onDisconnect().set("I disconnected!");
    //         alert("not connected");
    //         await usersRef
    //             .doc(userId)
    //             .set({
    //                 online: false,
    //             });
    //     }
    // });

    view.showComponents('loading')

    firebase.auth().onAuthStateChanged(function(user) {
        if (user && user.emailVerified || user && user.providerData[0].providerId === "facebook.com") {
            $('body').css('padding-right', '0px')
            checkStatusUser();

            view.showComponents('personal')



        } else {
            view.showComponents('home')
        }
    })
}


async function checkStatusUser() {
    let currentEmail = firebase.auth().currentUser.email
    let id = await controller.setupStatus();
    let uid;
    console.log(id)

    id.map(user => {
        if (user.email === currentEmail) {
            uid = user.id



            var userStatusDatabaseRef = firebase.database().ref('/status/' + uid);

            var isOfflineForDatabase = {
                state: 'offline',
                last_changed: firebase.database.ServerValue.TIMESTAMP,
            };

            var isOnlineForDatabase = {
                state: 'online',
                last_changed: firebase.database.ServerValue.TIMESTAMP,
            };

            firebase.database().ref('.info/connected').on('value', function(snapshot) {
                // If we're not currently connected, don't do anything.
                if (snapshot.val() == false) {
                    return;

                };

                userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(function() {

                    userStatusDatabaseRef.set(isOnlineForDatabase);
                });
            });

            var userStatusFirestoreRef = firebase.firestore().doc('/status/' + uid);

            var isOfflineForFirestore = {
                state: 'offline',
                last_changed: firebase.firestore.FieldValue.serverTimestamp(),
            };

            var isOnlineForFirestore = {
                state: 'online',
                last_changed: firebase.firestore.FieldValue.serverTimestamp(),
            };

            firebase.database().ref('.info/connected').on('value', function(snapshot) {
                if (snapshot.val() == false) {

                    userStatusFirestoreRef.set(isOfflineForFirestore);

                    return;
                };

                userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(function() {
                    userStatusDatabaseRef.set(isOnlineForDatabase);


                    userStatusFirestoreRef.set(isOnlineForFirestore);
                });
            });
            userStatusFirestoreRef.onSnapshot(function(doc) {
                var isOnline = doc.data().state == 'online';

            });

            firebase.firestore().collection('status')
                .where('state', '==', 'online')
                .onSnapshot(function(snapshot) {
                    snapshot.docChanges.forEach(function(change) {
                        if (change.type === 'added') {
                            $("#user-status").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/600px-Green_sphere.svg.png")
                            var msg = 'User ' + change.doc.id + ' is online.';
                            console.log(msg);



                        }
                        if (change.type === 'removed') {
                            var msg = 'User ' + change.doc.id + ' is offline.';
                            console.log(msg);

                        }
                    });
                });
        }


    })

}