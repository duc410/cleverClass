components.chats = `
<section>
<div class="container-fluid">
   <div class="chat-container">
   <div class="current-conversation shadow">
   <div id="list-message" class="list-message">
   </div>
   <form id="form-add-message" class="form-add-message">           
           <input type="text" class="form-control" name="message" placeholder="Enter your message...">
           <!-- <span class="emoji-show" id="emoji-show"><i class="fas fa-smile-beam"></i></span>
           <span class="thumb-up" id="laugh-show"><i class="fas fa-thumbs-up"></i></span> -->       
       <button type="submit" class="btn btn-primary" id="form-add-message-btn">Send</button>
   </form>
  
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