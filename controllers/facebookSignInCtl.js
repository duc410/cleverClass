controller.facebookSignIn = async function(uid) {


    admin.auth().updateUser(uid, {
            emailVerified: true,
        })
        .then(async function(userRecord) {
            $('body').css('padding-right', '0px')
            await view.showComponents('personal')
        })
        .catch(function(error) {
            console.log('Error updating user:', error);
        });

}