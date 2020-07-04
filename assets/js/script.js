var friendMenu = document.querySelector(".friend-menu");
var friendBody = document.querySelector(".friend-body");

var friendMenu1 = document.querySelector(".friend-menu1");
var friendMenu2 = document.querySelector(".friend-menu2");

var friendBody1 = document.querySelector(".friend-body1");
var friendBody2 = document.querySelector(".friend-body2");

friendMenu1.onclick = function () {
    friendMenu2.classList.remove('friend-active');
    friendBody2.classList.add('none');

    friendMenu1.classList.add('friend-active');
    friendBody1.classList.remove('none');
};
friendMenu2.onclick = function () {
    friendMenu1.classList.remove('friend-active');
    friendBody1.classList.add('none');

    friendMenu2.classList.add('friend-active');
    friendBody2.classList.remove('none');
};









var elementMenu1 = document.querySelector(".element-menu1");
var elementMenu2 = document.querySelector(".element-menu2");
var elementMenu3 = document.querySelector(".element-menu3");
var elementMenu4 = document.querySelector(".element-menu4");
var elementMenu5 = document.querySelector(".element-menu5");

var profileBody1 = document.querySelector(".profile-body1");
var profileBody2 = document.querySelector(".profile-body2");
var profileBody3 = document.querySelector(".profile-body3");
var profileBody4 = document.querySelector(".profile-body4");
var profileBody5 = document.querySelector(".profile-body5");


elementMenu1.onclick = function () {
    elementMenu2.classList.remove('element-active');
    profileBody2.classList.add('none');

    elementMenu3.classList.remove('element-active');
    profileBody3.classList.add('none');

    elementMenu4.classList.remove('element-active');
    profileBody4.classList.add('none');

    elementMenu5.classList.remove('element-active');
    profileBody5.classList.add('none');



    elementMenu1.classList.add('element-active');
    profileBody1.classList.remove('none');
};


elementMenu2.onclick = function () {
    elementMenu1.classList.remove('element-active');
    profileBody1.classList.add('none');

    elementMenu3.classList.remove('element-active');
    profileBody3.classList.add('none');

    elementMenu4.classList.remove('element-active');
    profileBody4.classList.add('none');

    elementMenu5.classList.remove('element-active');
    profileBody5.classList.add('none');



    elementMenu2.classList.add('element-active');
    profileBody2.classList.remove('none');
};


elementMenu3.onclick = function () {
    elementMenu1.classList.remove('element-active');
    profileBody1.classList.add('none');

    elementMenu2.classList.remove('element-active');
    profileBody2.classList.add('none');

    elementMenu4.classList.remove('element-active');
    profileBody4.classList.add('none');

    elementMenu5.classList.remove('element-active');
    profileBody5.classList.add('none');



    elementMenu3.classList.add('element-active');
    profileBody3.classList.remove('none');
};


elementMenu4.onclick = function () {
    elementMenu1.classList.remove('element-active');
    profileBody1.classList.add('none');

    elementMenu2.classList.remove('element-active');
    profileBody2.classList.add('none');

    elementMenu3.classList.remove('element-active');
    profileBody3.classList.add('none');

    elementMenu5.classList.remove('element-active');
    profileBody5.classList.add('none');



    elementMenu4.classList.add('element-active');
    profileBody4.classList.remove('none');
};


elementMenu5.onclick = function () {
    elementMenu1.classList.remove('element-active');
    profileBody1.classList.add('none');

    elementMenu2.classList.remove('element-active');
    profileBody2.classList.add('none');

    elementMenu3.classList.remove('element-active');
    profileBody3.classList.add('none');

    elementMenu4.classList.remove('element-active');
    profileBody4.classList.add('none');



    elementMenu5.classList.add('element-active');
    profileBody5.classList.remove('none');
};