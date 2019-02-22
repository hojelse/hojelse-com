function scrolldown() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('section.mediaContainer').offset().top }, 'slow');
    return false;
  });
};

function footer(){
  var tryme = document.getElementById("tryme");
  var trymeLoad = document.getElementById("trymeLoad");
  var footerArrowArray = document.getElementsByClassName("footerArrow");
  var footerArrow = footerArrowArray[0];

  function trymeIn(){
    $(tryme).addClass("tryme-in");
    $(trymeLoad).addClass("trymeLoad-in");
    $(footerArrow).addClass("footerArrow-in");
  };
  
  function trymeOut(){
    $(tryme).removeClass("tryme-in");
    $(tryme).addClass("tryme-out");
    $(trymeLoad).removeClass("trymeLoad-in");
    $(trymeLoad).addClass("trymeLoad-out");
    $(footerArrow).removeClass("footerArrow-in");
    $(footerArrow).addClass("footerArrow-out");
  };
  
  function trymeReset(){
    $(tryme).removeClass("tryme-out");
    $(trymeLoad).removeClass("trymeLoad-out");
    $(footerArrow).removeClass("footerArrow-out");
  };

  trymeIn();
  setTimeout(trymeOut, 3000);
  setTimeout(trymeReset, 3200);

};

var tryme = document.getElementById("tryme");
tryme.onclick = function(){
  $(tryme).addClass("tryme-on");
};

/*
function mediaPost() {
  var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
  var mediaPost = document.getElementById("mediaPost");
  var mediaPostLogo = document.getElementById("mediaPostLogo");
  var mediaPostBtn1 = document.getElementById("mediaPostBtn1");
  var mediaPostBtn2 = document.getElementById("mediaPostBtn2");

  $(mediaPost).addClass("mediaPost-on");
  $(mediaPostBtn1).addClass("mediaPostBtn1-on");
  $(mediaPostBtn1).addClass("mediaPostBtn1-on");
  $(mediaPostBtn2).addClass("mediaPostBtn2-on");
  $(mediaPostLogo).addClass("mediaPostLogo-on");

  $(mediaPostLogo).one(animationEvent, function(event) {
    $(mediaPost).removeClass('mediaPost-on');
    $(mediaPostBtn1).removeClass('mediaPostBtn1-on');
    $(mediaPostBtn2).removeClass('mediaPostBtn2-on');
    $(mediaPostLogo).removeClass('mediaPostLogo-on');
  });
};

function mediaPost_2() {
  var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
  var mediaPost_2 = document.getElementById("mediaPost_2");
  var mediaPostLogo_2 = document.getElementById("mediaPostLogo_2");
  var mediaPostBtn1_2 = document.getElementById("mediaPostBtn1_2");
  var mediaPostBtn2_2 = document.getElementById("mediaPostBtn2_2");

  $(mediaPost_2).addClass("mediaPost-on");
  $(mediaPostBtn1_2).addClass("mediaPostBtn1-on");
  $(mediaPostBtn1_2).addClass("mediaPostBtn1-on");
  $(mediaPostBtn2_2).addClass("mediaPostBtn2-on");
  $(mediaPostLogo_2).addClass("mediaPostLogo-on");

  $(mediaPostLogo_2).one(animationEvent, function(event) {
    $(mediaPost_2).removeClass('mediaPost-on');
    $(mediaPostBtn1_2).removeClass('mediaPostBtn1-on');
    $(mediaPostBtn2_2).removeClass('mediaPostBtn2-on');
    $(mediaPostLogo_2).removeClass('mediaPostLogo-on');
  });
};

function mediaPost_3() {
  var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
  var mediaPost_3 = document.getElementById("mediaPost_3");
  var mediaPostLogo_3 = document.getElementById("mediaPostLogo_3");
  var mediaPostBtn1_3 = document.getElementById("mediaPostBtn1_3");
  var mediaPostBtn2_3 = document.getElementById("mediaPostBtn2_3");

  $(mediaPost_3).addClass("mediaPost-on");
  $(mediaPostBtn1_3).addClass("mediaPostBtn1-on");
  $(mediaPostBtn1_3).addClass("mediaPostBtn1-on");
  $(mediaPostBtn2_3).addClass("mediaPostBtn2-on");
  $(mediaPostLogo_3).addClass("mediaPostLogo-on");

  $(mediaPostLogo_3).one(animationEvent, function(event) {
    $(mediaPost_3).removeClass('mediaPost-on');
    $(mediaPostBtn1_3).removeClass('mediaPostBtn1-on');
    $(mediaPostBtn2_3).removeClass('mediaPostBtn2-on');
    $(mediaPostLogo_3).removeClass('mediaPostLogo-on');
  });
};

function mediaPost_4() {
  var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
  var mediaPost_4 = document.getElementById("mediaPost_4");
  var mediaPostLogo_4 = document.getElementById("mediaPostLogo_4");
  var mediaPostTitle_4 = document.getElementById("mediaPostTitle_4");

  $(mediaPost_4).addClass("mediaPost-on");
  $(mediaPostTitle_4).addClass("mediaPostTitle-on");
  $(mediaPostLogo_4).addClass("mediaPostLogo-on");

  $(mediaPostLogo_4).one(animationEvent, function(event) {
    $(mediaPost_4).removeClass('mediaPost-on');
    $(mediaPostTitle_4).removeClass('mediaPostTitle-on');
    $(mediaPostLogo_4).removeClass('mediaPostLogo-on');
  });
};

function mediaPost_5() {
  var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
  var mediaPost_5 = document.getElementById("mediaPost_5");
  var mediaPostLogo_5 = document.getElementById("mediaPostLogo_5");
  var mediaPostTitle_5 = document.getElementById("mediaPostTitle_5");

  $(mediaPost_5).addClass("mediaPost-on");
  $(mediaPostTitle_5).addClass("mediaPostTitle-on");
  $(mediaPostLogo_5).addClass("mediaPostLogo-on");

  $(mediaPostLogo_5).one(animationEvent, function(event) {
    $(mediaPost_5).removeClass('mediaPost-on');
    $(mediaPostTitle_5).removeClass('mediaPostTitle-on');
    $(mediaPostLogo_5).removeClass('mediaPostLogo-on');
  });
};

function mediaPost_6() {
  var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
  var mediaPost_6 = document.getElementById("mediaPost_6");
  var mediaPostLogo_6 = document.getElementById("mediaPostLogo_6");
  var mediaPostTitle_6 = document.getElementById("mediaPostTitle_6");

  $(mediaPost_6).addClass("mediaPost-on");
  $(mediaPostTitle_6).addClass("mediaPostTitle-on");
  $(mediaPostLogo_6).addClass("mediaPostLogo-on");

  $(mediaPostLogo_6).one(animationEvent, function(event) {
    $(mediaPost_6).removeClass('mediaPost-on');
    $(mediaPostTitle_6).removeClass('mediaPostTitle-on');
    $(mediaPostLogo_6).removeClass('mediaPostLogo-on');
  });
};

function mediaPost_7() {
  var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
  var mediaPost_7 = document.getElementById("mediaPost_7");
  var mediaPostLogo_7 = document.getElementById("mediaPostLogo_7");
  var mediaPostTitle_7 = document.getElementById("mediaPostTitle_7");

  $(mediaPost_7).addClass("mediaPost-on");
  $(mediaPostTitle_7).addClass("mediaPostTitle-on");
  $(mediaPostLogo_7).addClass("mediaPostLogo-on");

  $(mediaPostLogo_7).one(animationEvent, function(event) {
    $(mediaPost_7).removeClass('mediaPost-on');
    $(mediaPostTitle_7).removeClass('mediaPostTitle-on');
    $(mediaPostLogo_7).removeClass('mediaPostLogo-on');
  });
};

function mediaPost_8() {
  var animationEvent = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
  var mediaPost_8 = document.getElementById("mediaPost_8");
  var mediaPostLogo_8 = document.getElementById("mediaPostLogo_8");
  var mediaPostTitle_8 = document.getElementById("mediaPostTitle_8");

  $(mediaPost_8).addClass("mediaPost-on");
  $(mediaPostTitle_8).addClass("mediaPostTitle-on");
  $(mediaPostLogo_8).addClass("mediaPostLogo-on");

  $(mediaPostLogo_8).one(animationEvent, function(event) {
    $(mediaPost_8).removeClass('mediaPost-on');
    $(mediaPostTitle_8).removeClass('mediaPostTitle-on');
    $(mediaPostLogo_8).removeClass('mediaPostLogo-on');
  });
};
*/