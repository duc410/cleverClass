controller.facebookSignIn = function(uid) {


    admin.auth().updateUser(uid, {
            emailVerified: true,
        })
        .then(async function(userRecord) {

        })
        .catch(function(error) {
            console.log('Error updating user:', error);
        });

}