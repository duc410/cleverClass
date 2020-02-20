window.onload = init

function init() {



    view.showComponents('loading')

    firebase.auth().onAuthStateChanged(function(user, token) {
        if (user && user.emailVerified || token) {
            $('body').css('padding-right', '0px')
            view.showComponents('personal')
        } else {
            view.showComponents('home')
        }
    })
}