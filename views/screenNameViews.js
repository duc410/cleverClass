const view = {
    currentScreen: null
}
view.showComponents = async function(screenName) {
    view.currentScreen = screenName

    switch (screenName) {
        case 'home':
            {

                let myWeb = document.getElementById('my-web')
                myWeb.innerHTML = components.home

                let form = document.getElementById('register-form')
                form.onsubmit = registerFormSubmitHandler

                let loginForm = document.getElementById('log-in-form')
                loginForm.onsubmit = formSubmitHandler

                var provider = new firebase.auth.GoogleAuthProvider();
                let googleSignIn = document.getElementById('google-sign-in')
                googleSignIn.onclick = googleSignInHandler

                var providerFacebook = new firebase.auth.FacebookAuthProvider();
                let facebookSignIn = document.getElementById('facebook-sign-in')
                facebookSignIn.onclick = facebookSignInHandler

                // register account 
                function registerFormSubmitHandler(e) {
                    e.preventDefault() // chan su kien form submit mac dinh
                        // get data
                    let registerInfo = {
                            name: form.name.value.trim(),
                            email: form.email.value.trim().toLowerCase(),
                            password: form.password.value,
                            confirmPassword: form.confirmPassword.value
                        }
                        // validate data
                    let validateResult = [
                            view.validate('username-error', [registerInfo.name, 'Misssing Name!']),
                            view.validate('register-email-error', [registerInfo.email, 'Missing email!']),
                            view.validate('register-password-error', [
                                registerInfo.password, 'Missing password!',
                                registerInfo.password.length >= 6, 'Password length must greater than or equals 6'
                            ]),
                            view.validate('confirm-password-error', [
                                registerInfo.confirmPassword, 'Missing confirm password!',
                                registerInfo.confirmPassword == registerInfo.password, 'Password and confirm password not match!'
                            ])
                        ]
                        // submit data
                    if (view.allPassed(validateResult)) {
                        controller.register(registerInfo)
                    }
                }

                // login account

                function formSubmitHandler(e) {
                    e.preventDefault()

                    let logInInfo = {
                        email: loginForm.email.value,
                        password: loginForm.password.value

                    }
                    $('body').removeClass('modal-open');
                    $('.modal-backdrop').remove();

                    let validateLoginResult = [
                        view.validate('email-error', [logInInfo.email, 'Missing email!']),
                        view.validate('password-error', [
                            logInInfo.password, 'Missing password!',
                            logInInfo.password.length >= 6, 'Password length must greater than or equals 6!'
                        ])
                    ]

                    if (view.allPassed(validateLoginResult)) {
                        controller.logIn(logInInfo)
                    }

                }

                // sign in with google 
                function googleSignInHandler() {

                    firebase.auth().signInWithPopup(provider).then(function(result) {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        var token = result.credential.accessToken;
                        console.log(token)
                        console.log(result)
                        view.showComponents('personal')

                        var user = result.user;
                        console.log(user)
                            // ...
                    }).catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        // ...
                    });
                }

                // sign in with facebook



                function facebookSignInHandler() {

                    firebase.auth().signInWithPopup(providerFacebook).then(async function(result) {
                        var token = result.credential.accessToken;
                        console.log(token)
                        var user = result.user.providerData[0];
                        var uid = user.uid
                        console.log(uid)
                        console.log(result)

                        await controller.facebookSignIn(uid)

                        $('body').css('padding-right', '0px')

                        view.showComponents('personal')
                        console.log(result)

                    }).catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;

                        // ...
                    })
                }



                break
            }

        case 'personal':
            {
                let myWeb = document.getElementById('my-web')
                myWeb.innerHTML = components.navbar + components.personal

                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();



                navbarEvent();

                await controller.loadClassroom()

                view.showListClassrooms();


                //Làm chức năng thêm lớp học
                let addClass = document.getElementById('add-class')
                addClass.onclick = linkClickHandler


                function linkClickHandler() {
                    view.showComponents('createClassForm')
                }



                break
            }

        case 'classroom':
            {
                let myWeb = document.getElementById('my-web')
                myWeb.innerHTML = components.navbar + components.classroom

                // navbarEvent();

                // console.log(window.location.protocol)
                // console.log(window.location.hostname)

                window.history.back()

                view.showCurrentClassroom()
                view.showListClassroomsAsideLeft()

                // thêm thành viên
                let addMember = document.getElementById('add-member')
                addMember.onclick = addMemberClickHandler

                function addMemberClickHandler(e) {
                    let addMemberInput = document.getElementById('add-member-input')

                    if (addMemberInput.style.display == 'none') {
                        addMemberInput.style.display = 'block'
                        addMemberInput.onkeydown = function() {
                            if (event.key === 'Enter') {
                                let userName = addMemberInput.value
                                    /**
                                     * ktra xem tên tài khoản có tồn tại k
                                     * thêm vào member
                                     * gửi thông báo cho ng đk thêm
                                     */
                            }

                        }

                    } else {
                        addMemberInput.style.display = 'none'
                    }


                }

                break;
            }

        case 'lesson':
            {
                let myWeb = document.getElementById('my-web')
                myWeb.innerHTML = components.navbar + components.lesson

                navbarEvent();

                $("#videoNext").click(function() {
                    $("#video-watch").attr("src", $(" #videoNext #idVideoNext").prop('src'))
                });


                let count = 0;

                $(document).ready(function() {
                    $("#presentVideo").click(function() {
                        count++;
                        console.log(count)
                        $("#views").html(count + " views")
                    })
                });

                break;
            }

        case 'chats':
            {

                let myWeb = document.getElementById('my-web')
                myWeb.innerHTML = components.navbar + components.chats

                let formAddMessage = document.getElementById('form-add-message')
                formAddMessage.onsubmit = formAddMessageSubmit


                let formAddConversation = document.getElementById('form-add-conversation')
                formAddConversation.onsubmit = formAddConversationSubmit

                let leaveConversation = document.getElementById("leave-conversation-btn")
                leaveConversation.onclick = leaveConversationHandler

                let formAddEmail = document.getElementById('form-add-email')
                formAddEmail.onsubmit = addEmailConversationHandler


                navbarEvent();

                controller.setupDatabaseChange()

                await controller.loadConversations() // load all conversations and save to model
                view.showCurrentConversation() // read data from model and display to screen

                view.showListConversation()

                console.log(model.conversations)

                async function formAddMessageSubmit(e) {
                    e.preventDefault()
                    let content = formAddMessage.message.value.trim()



                    if (model.currentConversation && content) {

                        view.disable('form-add-message-btn')
                        let message = {
                            content: content,
                            owner: firebase.auth().currentUser.email,
                            createAt: new Date().toISOString()
                        }
                        await controller.updateNewMessage(model.currentConversation.id, message)
                        formAddMessage.message.value = ''
                        view.enable('form-add-message-btn')


                    }
                }


                async function formAddConversationSubmit(e) {
                    e.preventDefault();

                    let title = formAddConversation.title.value;
                    let friendEmail = formAddConversation.friendEmail.value.trim().toLowerCase();
                    let currentEmail = firebase.auth().currentUser.email;
                    let friendEmailExists = await controller.validateEmailExists(friendEmail)

                    let validateResult = [
                        view.validate('title-error', [
                            title, 'Missing tittle'
                        ]),

                        view.validate('friend-email-error', [
                            friendEmail, 'Missing friendEmail',
                            friendEmailExists, 'Friend email do not exists',
                            friendEmail != currentEmail, `Please enter an other person's email `
                        ])

                    ]
                    if (view.allPassed(validateResult)) {
                        let conversation = {
                            users: [currentEmail, friendEmail],
                            messages: [],
                            title: title,
                            createAt: new Date().toISOString()
                        }
                        console.log(conversation)
                        await controller.addConversation(conversation)
                        console.log('added new conversation')
                        view.showComponents("chats")
                        formAddConversation.title.value = ""
                        formAddConversation.friendEmail.value = ""
                    }

                }

                let currentEmail = firebase.auth().currentUser.email
                let currentId = model.currentConversation.id

                async function leaveConversationHandler() {
                    await firebase.firestore().collection('conversations').doc(currentId).update({
                        users: firebase.firestore.FieldValue.arrayRemove(currentEmail),
                    })
                    view.showComponents("chats")


                }


                async function addEmailConversationHandler(e) {
                    e.preventDefault();
                    let addEmail = formAddEmail.emailAdd.value;
                    console.log(addEmail)
                    await controller.validateEmailExists(addEmail)

                    await firebase.firestore().collection('conversations').doc(currentId).update({
                        users: firebase.firestore.FieldValue.arrayUnion(addEmail),
                    })
                    view.setText('add-friend-success', 'You have added your Friend successfully')


                }

                break
            }

        case 'loading':
            {

                let myWeb = document.getElementById('my-web')
                myWeb.innerHTML = components.loading

                break
            }

        case 'createClassForm':
            {
                let myWeb = document.getElementById('my-web')
                myWeb.innerHTML = components.createClassForm

                let closeBtn = document.getElementById('closeForm')
                closeBtn.onclick = buttonCloseHandler

                let createClassForm = document.getElementById('create-class-form')
                createClassForm.onsubmit = createClassFormHandler

                function buttonCloseHandler() {
                    view.showComponents('personal')
                }
                async function createClassFormHandler(e) {
                    e.preventDefault()
                    view.disable('form-add-class-btn')

                    let courseName = createClassForm.nameClass.value.trim()
                    let courseTarget = createClassForm.targetCourse.value.trim()
                    let owner = firebase.auth().currentUser.email
                    let numberOfLesson = createClassForm.numberLesson.value.trim()
                    let start = createClassForm.timeStart.value.trim()
                    let end = createClassForm.timeEnd.value.trim()
                    let validateResult = [view.validate('course-name-error', [courseName, '* Vui lòng điền tên lớp học'])]
                    if (view.allPassed(validateResult)) {

                        let courseTime = { end: end, numberOfLesson: numberOfLesson, start: start }

                        let decription = { courseName: courseName, courseTarget: courseTarget, courseTime: courseTime }
                        let classroom = {
                            decription: decription,
                            lessons: [],
                            members: [owner],
                            teacher: owner
                        }
                        await controller.addClassroom(classroom)
                        controller.setupDatabaseClassroomChange()
                        view.showComponents('personal')
                    } else {
                        view.enable('form-add-class-btn')
                    }
                }

                break;
            }

        case 'account':
            {
                let myWeb = document.getElementById('my-web')
                myWeb.innerHTML = components.navbar + components.account

                navbarEvent();

                var currentEmail = firebase.auth().currentUser.email;
                let userName = firebase.auth().currentUser.providerData[0].displayName

                // set data for displayName and email of account setting
                $("#name").val(userName)
                $("#email").val(currentEmail)



                let deleteForEmail = document.getElementById("delete-for-email")
                deleteForEmail.innerHTML = `Email :` + currentEmail


                let changeInfo = document.getElementById("change-info-form")
                changeInfo.onsubmit = changeInfoHandler

                let deleteAccount = document.getElementById("delete-account")
                deleteAccount.onsubmit = deleteAccountHandler

                let formChangeNameOrEmail = document.getElementById("change-info-email-name");
                formChangeNameOrEmail.onsubmit = formChangeNameOrEmailHandler

                function changeInfoHandler(e) {
                    e.preventDefault()

                    // get data
                    let passwordInfo = {
                            oldPassword: changeInfo.oldPassword.value,
                            newPassword: changeInfo.newPassword.value,
                            confirmPassword: changeInfo.confirmPassword.value
                        }
                        // validate data
                    let validateResult = [
                            view.validate('new-password-error', [
                                passwordInfo.newPassword, 'Missing password!',
                                passwordInfo.newPassword.length >= 6, 'Password length must greater than or equals 6'
                            ]),
                            view.validate('confirm-password-error', [
                                passwordInfo.confirmPassword, 'Missing confirm password!',
                                passwordInfo.confirmPassword == passwordInfo.newPassword, 'Password and confirm password not match!'
                            ])
                        ]
                        // submit data
                    if (view.allPassed(validateResult)) {
                        controller.changePassword(passwordInfo)
                    }
                }



                async function deleteAccountHandler(e) {
                    e.preventDefault()
                    let credential = deleteAccount.password.value
                    console.log(credential)


                    view.disable('delete-account-btn')


                    await controller.deleteAccount(credential)
                    view.enable('delete-account-btn')
                }

                function formChangeNameOrEmailHandler(e) {
                    e.preventDefault();
                    let info = {
                        newName: formChangeNameOrEmail.newName.value,
                    }
                    let validateResult = [
                        view.validate('new-name-error', [info.newName, 'Missing the name!']),
                    ]
                    if (view.allPassed(validateResult)) {
                        controller.changeInfo(info)
                    }

                }



                break;
            }
    }
}