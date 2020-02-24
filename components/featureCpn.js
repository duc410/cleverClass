components.chats = `
<section>

<div class="container-fluid" style="display:flex">
    <div class="chat-container">  
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


    <div id="social-media" class="social-media ">
  <div>
    <div class="card shadow card-info" style="width: 18rem;">
    <h5 class="card-title text-center">My Profile</h5>
    <div class="avatar-social">
    <img class="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/mindx-c72f4.appspot.com/o/photoURL%2FLongBody.jpg?alt=media&token=eb656c69-5139-407d-8c3a-3851e6d6c63f" alt="Card image cap">
    </div> 
    <div class="card-body"> 
      <hr/>
      <p class="information-user"><i class="fas fa-user-edit"></i> LongBody</p>
      <p class="information-user"><i class="fas fa-home"></i> Ha Noi,VN</p>
      <p class="information-user"><i class="fas fa-birthday-cake"></i> November 30,2000</p>
    </div>
     </div>


     <div class="card shadow card-conversation" style="width: 18rem;">
     <div class="list-conversation" id="list-conversation">

     </div>  
      </div>

      <div class="card card-interested" style="width: 18rem;">
      <div class="card-body">
        <strong><p class="card-title">Interested</p></strong>
        <span class="interested">Mind class</span>
        <span class="interested">javascript</span>
        <span class="interested">Wuhan News</span> 
        <span class="interested">nodejs video</span> 
      </div>
    </div>


     </div> 
     
     <div class="card shadow card-social-post">
     <div>

     <div class="card-body ">
     <strong><p class="card-title">Create Posts<p></strong>
     <form class="form-group">
     <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="What's on your mind...">
     <div class="upload-image">
     <button type="button" class="btn btn-primary mt-2 post-btn">Post</button>
     <i class="fas fa-images ml-3 mt-1"></i>
     </div> 
   </form>
     </div>
   </div>

   <div class="card shadow post-view" >
<div class="info-view-post">
<img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-1/p160x160/83083099_2033576800122556_3174367129692536832_o.jpg?_nc_cat=103&_nc_ohc=1rIZP__mSe4AX8LPZ8M&_nc_ht=scontent.fhan2-4.fna&_nc_tp=6&oh=b67035b32fb20d3e62bbd8555e2f13ae&oe=5EB995F2" class="card-img-top-post-view" alt="..." >
<span>Phuc Bo</span>
</div>
  <div class="card-body">
    <p class="card-text">The government in Seoul put the country on high alert after the number of infections surged over 600 with six deaths. A focal point was a church in the southeastern city of Daegu, where a 61-year-old member of the congregation with no recent record of overseas travel tested positive for the virus.

    In Italy, the number of cases jumped to above 130 from just three before Friday. Authorities sealed off the worst affected towns and banned public gatherings in much of the north, including halting the carnival in Venice, where there were two cases, to try to contain the biggest outbreak in Europe.
    
    Italian health authorities were struggling to find out how the virus started. “If we cannot find ‘patient zero’ then it means the virus is even more ubiquitous than we thought,” said Luca Zaia, the regional governor of the wealthy Veneto region.
    
    Iran, which announced its first two cases on Wednesday, said it had confirmed 43 cases and eight deaths, with most of the infections in the Shi’ite Muslim holy city of Qom.</p> 
   <button type="button" class="btn btn-light">  <i class="far fa-thumbs-up"></i> Like</button>
  <button type="button" class="btn btn-light">  <i class="fas fa-comments"></i> Comment</button>
  </div>
</div>


<div class="card shadow post-view" >
<div class="info-view-post">
<img src="https://firebasestorage.googleapis.com/v0/b/mindx-c72f4.appspot.com/o/photoURL%2FLongBody.jpg?alt=media&token=eb656c69-5139-407d-8c3a-3851e6d6c63f" class="card-img-top-post-view" alt="..." >
<span>LongBody</span>
</div>
  <div class="card-body"> 
    <p class="card-text">Some one can help me?</p>
   <button type="button" class="btn btn-light">  <i class="far fa-thumbs-up"></i> Like</button>
  <button type="button" class="btn btn-light">  <i class="fas fa-comments"></i> Comment</button>
  </div>
</div>




<div class="card shadow post-view" >
<div class="info-view-post">
<img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t31.0-1/c47.0.160.160a/p160x160/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_ohc=WT8hZaY-rJcAX_qSjxC&_nc_ht=scontent.fhan2-4.fna&oh=4415d87b7acf88e10ed4e926d46aad80&oe=5EC296BD" class="card-img-top-post-view" alt="..." >
<span>Trang Trinh</span>

</div>
  <div class="card-body">
    <p class="card-text">“At present, the epidemic situation is still severe and complex, and prevention and control work is in the most difficult and critical stage,” President Xi Jinping said.

    State run television urged people to avoid complacency, drawing attention to people gathering in public areas and tourist spots without wearing masks.
    
    The virus has killed 2,442 people in China, which has reported 76,936 cases, and has slammed the brakes on the world’s second largest economy. It has spread to some 26 other countries and territories, with a death toll of around two dozen, according to a Reuters tally.</p> 
   <button type="button" class="btn btn-light">  <i class="far fa-thumbs-up"></i> Like</button>
  <button type="button" class="btn btn-light">  <i class="fas fa-comments"></i> Comment</button>
  </div>
</div>


<div class="card shadow post-view" >
<div class="info-view-post">
<img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-1/p160x160/83083099_2033576800122556_3174367129692536832_o.jpg?_nc_cat=103&_nc_ohc=1rIZP__mSe4AX8LPZ8M&_nc_ht=scontent.fhan2-4.fna&_nc_tp=6&oh=b67035b32fb20d3e62bbd8555e2f13ae&oe=5EB995F2" class="card-img-top-post-view" alt="..." >
<span>Phuc Bo</span>
</div>
  <div class="card-body">
<img class="img-fluid" src="https://i.pinimg.com/736x/3f/cd/c4/3fcdc4de321c46a6da56f58ac8112478.jpg">
   <div>
   <button type="button" class="btn btn-light">  <i class="far fa-thumbs-up"></i> Like</button>
  <button type="button" class="btn btn-light">  <i class="fas fa-comments"></i> Comment</button>
   </div>
  </div>
</div>



<div class="card shadow post-view" >
<div class="info-view-post">
<img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t31.0-1/c47.0.160.160a/p160x160/1402926_10150004552801901_469209496895221757_o.jpg?_nc_cat=1&_nc_ohc=WT8hZaY-rJcAX_qSjxC&_nc_ht=scontent.fhan2-4.fna&oh=4415d87b7acf88e10ed4e926d46aad80&oe=5EC296BD" class="card-img-top-post-view" alt="..." >
<span>Trang Trinh</span>

</div>
  <div class="card-body">
  <img class="img-fluid" src="https://i.pinimg.com/originals/7d/a9/11/7da91185b7ae087d9e18a88b8b28362c.jpg">
   <button type="button" class="btn btn-light">  <i class="far fa-thumbs-up"></i> Like</button>
  <button type="button" class="btn btn-light">  <i class="fas fa-comments"></i> Comment</button>
  </div>
</div>


   
   
     
     
     
     
     </div>
    </div>



    <div id="state-friend" class="state-friend card">
    <h6 class="contact">Contact Users</h6>
    <hr/>
    <div class="user" id="list-user-status"></div>

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