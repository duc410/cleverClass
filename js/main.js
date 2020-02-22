window.onload = init

function init() {


    const db = firebase.firestore();

    const usersRef = db.collection('users'); // Get a reference to the Users collection;

    // Set the specific user's online status to true


    let userId = "oxn04Vr5YTfcahcIgb3Y"


    var connectedRef = firebase.database().ref(".info/connected");



    view.showComponents('loading')

    firebase.auth().onAuthStateChanged(function(user) {
        if (user && user.emailVerified || user && user.providerData[0].providerId === "facebook.com") {
            $('body').css('padding-right', '0px')

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

            view.showComponents('personal')



        } else {
            view.showComponents('home')
        }
    })
}