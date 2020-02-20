components.classroom = `<div class="d-flex">
<section class="aside-left">
   

    <div class="nav flex-container">
        <div class="" style="flex-grow: 2; border-right: solid 1px rgb(184, 182, 182);">
            <a href="#" class="my-home">
                <i class="fas fa-home"></i>
                <span>Trang chủ</span>
            </a>
        </div>
        <div class="pl-3" style="flex-grow: 1">
            <i class="fas fa-cog"></i>
        </div>
    </div>

    <div class="my-class-list-wrapper">
        <div class="title">
            Lớp học của bạn
        </div>
        <ul class="my-class-list" id="my-class-list">
         
        </ul>
    </div>
    <div class="current-class-wrapper">
        <div>
            <span id="add-member">
                <i class="fas fa-user-plus"></i>
                <span>Thêm thành viên</span>
            </span>
            <input id="add-member-input"  class="add-input" placeholder="Nhập tên người dùng"></input>
        </div>
        <div>
            <span id="add-">
                <i class="fas fa-plus-square"></i>
                <span>Thêm bài học</span>
            </span>
            <textarea class="form-control" id="class-name-input" rows="1"></textarea>
        </div>
        <div>
            <span id="change-teacher">
                <i class="fas fa-exchange-alt"></i>
                <span>Thay đổi giảng viên</span>
            </span>
            <input id="change-teacher-input"  class="add-input" placeholder="Nhập tên người dùng"></input>
        </div>
        <div>
            <i class="fas fa-edit"></i>
            <span>Chỉnh sửa thông tin lớp học</span>
        </div>
    </div>
</section>

<section class="class-current pl-3" style="flex-grow: 1;" id="classCurrent">
    <div class="d-flex p-2">
        <div class="mr-auto class-name" id="courseName"></div>
    </div>
        
    <div class="classroom-info p-3">
        <h2 class="courses-detail-title">
            <span>Thông tin lớp học:</span>
        </h2>
        <h3>Mục tiêu khóa học:</h3>
        <ul>
            <li id="courseTarget"></li>
        </ul>
        <h3>Thành viên</h3>
        <ul>
            <li id="teacher">Giáo viên: </li>
            <li id="students">Học viên: người</li>
        </ul>
        <div id="time"></div>
    </div>

    <div class="classroom-lesson p-3">
        <h2 class="courses-detail-title">
            <span>Nội dung khóa học</span>
        </h2>
        <ul class="learn-outline" id="lessons">
            <li class="learn-outline-item">
            </li>
        </ul>
    </div>
</section>
</div>`