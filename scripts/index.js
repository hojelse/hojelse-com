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

var animateHTML = function () {
  var elems
  var windowHeight
  function init() {
    elems = document.querySelectorAll(".hidden")
    windowHeight = window.innerHeight
    addEventHandlers()
    checkPosition()
  }
  function addEventHandlers() {
    window.addEventListener("scroll", checkPosition)
    window.addEventListener("resize", init)
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          "hidden",
          "fade-in-element"
        )
      }
    }
  }
  return {
    init: init,
  }
}
animateHTML().init()

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

//Google analytics event tracking
//ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
function gaEventTracking(eventLabel) {
  ga("send", "event", "Outbound links", "IG post click", eventLabel)
}

function handleOutboundLinkClicks(eventLabel) {
  ga("send", "event", {
    eventCategory: "Outbound Link",
    eventAction: "click",
    eventLabel: eventLabel,
    transport: "beacon",
  })
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
