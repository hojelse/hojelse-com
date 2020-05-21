
function sectionToggle(elem) {
  $(elem.nextElementSibling).toggleClass("blocksClosed");
  $(elem).toggleClass("sectionTitleClosed");
  $(elem.children[1]).toggleClass("triangleClosed");
};