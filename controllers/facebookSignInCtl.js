controller.facebookSignIn = async function(uid) {


    await admin.auth().updateUser(uid, {
            emailVerified: true,
        })
        .then(async function(userRecord) {

        })
        .catch(function(error) {
            console.log('Error updating user:', error);
        });

}