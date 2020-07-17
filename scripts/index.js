// function browerWarnings() {
//   let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
//   // let iOS = navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
//   // let iOS = true;
//   if (isIOS) {
//     alert("You are on an iOS device. Some functions might not work as intended.")
//   }
//   let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
//   if(!isChrome) {
//     alert("You are not using Google Chrome. Some functions might not work as intended.")
//   }
//   if(isChrome) {
//     alert("chrome");
//   }
// }
// browerWarnings();

// function onVisibilityChange(el, callback) {
//   var old_visible;
//   return function () {
//       var visible = isElementInViewport(el);
//       if (visible != old_visible) {
//           old_visible = visible;
//           if (typeof callback == 'function') {
//               callback();
//           }
//       }
//   }
// }

// var handler = onVisibilityChange(el, function() {
//   /* Your code go here */
//   console.log(el);
// });

if (window.addEventListener) {
  addEventListener('DOMContentLoaded', handler, false);
  addEventListener('load', handler, false);
  addEventListener('scroll', handler, false);
  addEventListener('resize', handler, false);
} else if (window.attachEvent)  {
  attachEvent('onDOMContentLoaded', handler); // Internet Explorer 9+ :(
  attachEvent('onload', handler);
  attachEvent('onscroll', handler);
  attachEvent('onresize', handler);
}


// let elems = document.querySelectorAll(".hidden")
// for (let i = 0; i < elems.length; i++) {
//   const element = elems[i];
//   element.addEventListener
// }

function isElementInViewport (el) {
  var rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


function scrolldown() {
  $("html, body").animate(
    { scrollTop: $("section.mediaContainer").offset().top },
    "slow"
  )
  return false
}

function mailto(URL) {
  setTimeout(function () {
    window.location = URL
  }, 500)
}

// var animateHTML = function () {
//   var elems
//   var windowHeight
//   function init() {
//     elems = document.querySelectorAll(".hidden")
//     windowHeight = window.innerHeight
//     addEventHandlers()
//     checkPosition()
//     fadeinElementsIfIOS()
//   }
//   function addEventHandlers() {
//     window.addEventListener("scroll", checkPosition)
//     window.addEventListener("resize", init)
//   }
//   function checkPosition() {
//     for (var i = 0; i < elems.length; i++) {
//       var positionFromTop = elems[i].getBoundingClientRect().top
//       if (positionFromTop - windowHeight <= 0) {
//         elems[i].className = elems[i].className.replace(
//           "hidden",
//           "fade-in-element"
//         )
//       }
//     }
//   }
//   function fadeinElementsIfIOS() {
//     let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
//     if (iOS) {
//       for (var i = 0; i < elems.length; i++) {
//         elems[i].className = elems[i].className.replace(
//           "hidden",
//           "fade-in-element"
//         )
//       }
//     }
//   }
//   return {
//     init: init,
//   }
// }
// animateHTML().init()

function footer() {
  var tryme = document.getElementById("tryme")
  var trymeLoad = document.getElementById("trymeLoad")
  var footerArrowArray = document.getElementsByClassName("footerArrow")
  var footerArrow = footerArrowArray[0]

  function trymeIn() {
    tryme.classList.add("tryme-in")
    trymeLoad.classList.add("trymeLoad-in")
    footerArrow.classList.add("footerArrow-in")
  }

  function trymeOut() {
    tryme.classList.remove("tryme-in")
    tryme.classList.add("tryme-out")
    trymeLoad.classList.remove("trymeLoad-in")
    trymeLoad.classList.add("trymeLoad-out")
    footerArrow.classList.remove("footerArrow-in")
    footerArrow.classList.add("footerArrow-out")
  }

  function trymeReset() {
    tryme.classList.remove("tryme-out")
    trymeLoad.classList.remove("trymeLoad-out")
    footerArrow.classList.remove("footerArrow-out")
  }

  trymeIn()
  setTimeout(trymeOut, 3000)
  setTimeout(trymeReset, 3200)
}

var tryme = document.getElementById("tryme")
tryme.onclick = function () {
  tryme.classList.add("tryme-on")
}

class MediaPost {
  #title
  #platform
  #imagePath
  #linkPath
  #description

  constructor(title, platform, imagePath, linkPath, description) {
    this.#title = title
    this.#platform = platform
    this.#imagePath = imagePath
    this.#linkPath = linkPath
    this.#description = description
  }
}
