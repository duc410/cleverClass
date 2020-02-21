window.onload = init

function init() {



    view.showComponents('loading')

    firebase.auth().onAuthStateChanged(function(user) {
        if (user && user.emailVerified || user && user.providerData[0].providerId === "facebook.com") {
            $('body').css('padding-right', '0px')
            view.showComponents('personal')
        } else {
            view.showComponents('home')
        }
    })
}