controller.facebookSignIn = async function(uid) {
    admin.auth().updateUser(uid, {
            emailVerified: true,

        })
        .then(function(userRecord) {
            console.log("Success SignIn")
        })
        .catch(function(error) {
            console.log('Error updating user:', error);
        });

}