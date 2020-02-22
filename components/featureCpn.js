components.chats = `
<section>

<div class="container-fluid" style="display:flex">
    <div class="chat-container">
        <div class="dropright">
            <i class="fab fa-facebook-messenger dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
            <div class="dropdown-menu dropdown-menu-right mt-2" aria-labelledby="dropdownMenuButton">
                <div class="list-conversation" id="list-conversation">

                </div>
            </div>
        </div>
        <div class="current-conversation shadow">

            <div class="dropdown">
                <i class="fas fa-cog setting dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                <div class="dropdown-menu dropdown-menu-right mt-2" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" data-toggle="modal" data-target="#createGroup"> <i class="fas fa-users"></i> Create New Group</a>
                    <a class="dropdown-item" data-toggle="modal" data-target="#exampleModal"> <i class="fas fa-user-plus"></i> Add People</a>
                    <a class="dropdown-item" data-toggle="modal" data-target="#memberModal"> <i class="fas fa-user-alt"></i> Member</a>
                    <a class="dropdown-item" href="#" id="leave-conversation-btn"> <i class="fas fa-sign-out-alt"></i> Leave Group</a>
                </div>
                <div class="dropdown-divider"></div>

            </div>


            <div id="list-message" class="list-message"> </div>
            <form id="form-add-message" class="form-add-message">
                <input type="text" class="form-control" name="message" placeholder="Enter your message...">
                <!-- <span class="emoji-show" id="emoji-show"><i class="fas fa-smile-beam"></i></span>
            <span class="thumb-up" id="laugh-show"><i class="fas fa-thumbs-up"></i></span> -->
                <button type="submit" class="btn btn-primary" id="form-add-message-btn">Send</button>
            </form>

        </div>
    </div>

    <div id="social-media" class="social-media card">

        
    <section class="d-flex flex-column bd-highlight p-3 post-main">
    <div class="bd-highlight article create-article rounded mb-3">
        <div class="header-article">
            Tạo bài viết
        </div>
        <div class="body-article p-3" style="width: 100%;">
            <div class="d-flex align-items-center">
                <div class="avatar rounded-circle"></div>
                <div class="flex-fill pl-4">
                    <textarea class="text-input" rows="4"
                        placeholder="Viết bài ngay nào!!!">ai đoán là long cho 100 like ai đoán là long cho 100 like ai đoán là long cho 100 like ai đoán là long cho 100 likeai đoán là long cho 100 like ai đoán là long cho 100 like ai đoán là long cho 100 like ai đoán là long cho 100 like ai đoán là long cho 100 like ai đoán là long cho 100 likeai đoán là long cho 100 like ai đoán là long cho 100 likeai đoán là long cho 100 like ai đoán là long cho 100 like ai đoán là long cho 100 like ai đoán là long cho 100 likeai đoán là long cho 100 like ai đoán là long cho 100 like ai đoán là long cho 100 like ai đoán là long cho 100 like ai đoán là long cho 100 like ai đoán là long cho 100 likeai đoán là long cho 100 like ai đoán là long cho 100 like</textarea>
                </div>
            </div>
            <div class="upload">
                <i class="far fa-image"></i>
            </div>
            <div class="list-image-upload d-flex flex-wrap">
                <div class="image-upload">
                    <button class="close">&times</button>
                </div>
                <div class="image-upload">
                    <button class="close">&times</button>
                </div>
                <div class="image-upload">
                    <button class="close">&times</button>
                </div>
            </div>

        </div>
        <div class="footer-article d-flex p-2">
            <button type="button" class="btn btn-sm btn-primary ml-auto">Đăng </button>
        </div>
    </div>
    <div class="bd-highlight article rounded mb-3">
        <div class="header-article p-2">
            <h3>Nạn nhân đầu tiên của corona: phúc or long???</h3>
            <span>Đăng bởi Trang Trịnh</span>
            <span class="time"> 15 phút trước</span>
        </div>
        <div class="body-article  p-2" style="width: 100%;">
            <p>
                Mọi người cho mình hỏi tk nào là căn nguyên lây cho tk còn lại ạ? Em thắc mắc quá mà k bt hỏi ai!
                mong ae sớm trả lời ạ!
            </p>
            <div class="list-image d-flex flex-wrap">
                <img class="image-item" src="./bob tỉa layer.jpg">
            </div>
            <div class="line"></div>
            <span>
                100 trả lời
                <!-- đổi giữa 2 icon này để ẩn hiện comment nhé -->
                <i class="fas fa-angle-down"></i>
                <i class="fas fa-angle-up"></i>
            </span>
        </div>
        <div class="footer-article p-2">
            <ul class="list-answer">
                <li>
                    <div class="answer d-flex align-items-top">
                        <div class="avatar rounded-circle"></div>
                        <div class="flex-fill pl-4">
                            <div class="text">
                                <span class="username">Nguyễn Văn A</span>
                                <span>ai đoán là long cho 100 like ai đoán là long cho 100 like ai
                                    ai đoán là long cho 100 like ai đoán là long cho 100 like ai ai đoán là long cho 100
                                    like ai đoán là long cho 100 like ai là long cho 100 like ai ai đoán là long cho 100
                                    đoán là long cho 100 like like</span>
                            </div>
                            <div class="list-image">
                                <img class="image-item" src="./bob tỉa layer.jpg" alt="">
                            </div>
                        </div>
                    </div>

                    <div class="answer-child">
                        <div class="answer d-flex align-items-top">
                            <div class="avatar rounded-circle"></div>
                            <div class="flex-fill pl-4">
                                <div class="text">
                                    <span class="username">Nguyen Thanh Long</span>
                                    <span>cảm tính thế ông</span>
                                </div>
                                <div class="list-image">
                                    <img class="image-item" src="./bob tỉa layer.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="answer-input">
                <div class="d-flex align-items-top reply">
                    <div class="avatar rounded-circle"></div>
                    <div class="flex-fill pl-4">
                        <textarea class="text-input rounded p-1" rows="3"
                            placeholder="Viết trả lời" style="width: 100%"></textarea>
                    </div>
                    <div class="upload ml-2">
                        <i class="far fa-image"></i>
                    </div>
                </div>
                <div class="list-image-upload d-flex flex-wrap">
                    <div class="image-upload">
                        <button class="close">&times</button>
                    </div>
                </div>
                <div class="footer-article d-flex p-2">
                    <button type="button" class="btn btn-sm btn-primary ml-auto">Đăng </button>
                </div>
            </div>
            
        </div>
    </div>

</section>

         
    </div>



    <div id="state-friend" class="state-friend card">
    <h6 class="contact">Contact Users</h6>
    <hr/>
    <div class="user">

    <div class="personal">
    <div class="info-personal">
    <img class="avatar-user" src="https://firebasestorage.googleapis.com/v0/b/mindx-c72f4.appspot.com/o/photoURL%2FLongBody.jpg?alt=media&token=eb656c69-5139-407d-8c3a-3851e6d6c63f" >
     <span>LongBody</span>
    </div>
     <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/600px-Green_sphere.svg.png " class="status "></span>
    </div>

    <div class="personal">
    <div class="info-personal">
    <img class="avatar-user img-fluid" src="https://scontent.fhan2-4.fna.fbcdn.net/v/t31.0-1/c47.0.160.160a/p160x160/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_ohc=WT8hZaY-rJcAX_qSjxC&_nc_ht=scontent.fhan2-4.fna&oh=4415d87b7acf88e10ed4e926d46aad80&oe=5EC296BD" >
     <span>Trang Trinh</span>
     </div>
     <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/600px-Green_sphere.svg.png " class="status "></span>
    </div>

    <div class="personal">
    <div class="info-personal">
    <img class="avatar-user" src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-1/p160x160/83083099_2033576800122556_3174367129692536832_o.jpg?_nc_cat=103&_nc_ohc=1rIZP__mSe4AX8LPZ8M&_nc_ht=scontent.fhan2-4.fna&_nc_tp=6&oh=b67035b32fb20d3e62bbd8555e2f13ae&oe=5EB995F2" >
     <span>Phuc Bo</span>
     </div>
     <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/600px-Green_sphere.svg.png " class="status "></span>
    </div>

    <div class="personal">
    <div class="info-personal">
    <img class="avatar-user" src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-1/p160x160/52598541_585694821894301_1989738540124078080_o.jpg?_nc_cat=102&_nc_ohc=LwLpQClkRt0AX-IjoWl&_nc_ht=scontent.fhan2-3.fna&_nc_tp=6&oh=00089dc2aa9e342e39bcf31992371cd2&oe=5EC8A077" >
     <span>Mai Thanh Tung</span>
     </div>
     <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/600px-Green_sphere.svg.png " class="status "></span>
    </div>

    </div>
    
    </div>

   

</div>





<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Add People</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <form id="form-add-email">
    <div class="form-group">
      <input type="text" name="emailAdd" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a Friend Email">
      <div id="friend-email-error" class="message-error"></div>
      <div id="add-friend-success" class="message-success"></div>
      </div>
    <button type="submit" class="btn btn-primary"  id="add-conversation-btn">ADD</button>
    
  </form>
    </div>
    
  </div>
</div>
</div>
 </div>

 

<div class="modal fade" id="createGroup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Create New Group</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    
    <form class="form-add-conversation" id="form-add-conversation">
    <div class="form-group">
      <input type="text " name="title"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Conversation Title">
      <div id="title-error" class="message-error"></div>
      </div>
    <div class="form-group">
      <input type="email " name="friendEmail" class="form-control" id="exampleInputPassword1" placeholder="Enter a Friend Email">
      <div id="friend-email-error" class="message-error"></div>
      <button type="submit" class="btn btn-primary id="form-add-conversation-btn" >ADD</button>
  </form>

    </div>
    
  </div>
</div>
</div>
 </div>



 <div class="modal fade" id="memberModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Members</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    
<div id="list-member"></div>

    </div>
    
  </div>
</div>
</div>
 </div>

</section>



`

components.lesson = `<section class="home">
<div class="container-fluid">
    <div class="row">
        <div class="video-watch">
            <video controls id="video-watch" width="1274px" height="740px" src="https://firebasestorage.googleapis.com/v0/b/mindx-c72f4.appspot.com/o/Web%20Chat%20-%20Google%20Chrome%202020-01-14%2015-09-34.mp4?alt=media&token=13bf05fa-4672-4332-aee3-361e6c6aca6a">
    Your browser does not support the video tag.
  </video>

            <div>
                <h5>Last Friday Night</h5>
            </div>
            <div class="views">
                9,000,000 views
                <span class="dot">•</span>
                <span>Nov 30,2019</span>
                <div class="iconVideo">
                    <span> <i class="far fa-thumbs-up"></i>50k</span>
                    <span> <i class="far fa-thumbs-down"></i>2k</span>
                    <span class="far"> FeedBack</span>

                </div>
            </div>
            <hr/>

            <div class="info">
                <img src="https://yt3.ggpht.com/-HRUb9tEICPI/AAAAAAAAAAI/AAAAAAAAAAA/0WHwD4cHfrY/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg" style="width:40px; border-radius: 50%;border: solid 1px;">

                <span class="far">LongBody</span>
                <button type="button" class="btn btn-primary follow">Follow</button>
            </div>

        </div>
        <div class="list-video  overflow-list-video">
            <div class="card">
                <div id="videoNext">
                    <video controls width="150px" id="idVideoNext" height="100px" src="https://firebasestorage.googleapis.com/v0/b/mindx-c72f4.appspot.com/o/cleverClass%20-%20Google%20Chrome%202020-02-10%2020-06-35.mp4?alt=media&token=667178a6-97ad-4288-9ce9-feb8584091f8"
                        preload="metadata"></video>
                    <div class="info-video-of-list">
                        <span class="name-of-video">Như Một Người Dưng Remix - Nguyễn Thạc Bảo Ngọc</span>
                        <p class="name-of-admin">LongBody</p>
                    </div>
                </div>
             

            </div>
        </div>
    </div>
</div>
</section>`