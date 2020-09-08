"use strict";

var viewport = {
  width: window.innerWidth,
  height: window.innerHeight
};
window.addEventListener("resize", function () {
  viewport.width = window.innerWidth;
  viewport.height = window.innerHeight; //console.log(viewport);
});
document.addEventListener('DOMContentLoaded', function (event) {
  //Initialize you modules here...
  void 0;
  var showSolution = document.getElementsByClassName('js-toggle-solution');

  for (var i = 0; i < showSolution.length; i++) {
    var element = showSolution[i];
    element.addEventListener('click', function (e) {
      e.preventDefault();
      var parent = this.parentNode;

      if (parent.className == "open") {
        parent.classList.remove("open");
        this.innerHTML = "&DownArrowBar; Show Solution";
      } else {
        parent.classList.add("open");
        this.innerHTML = "&UpArrowBar; Hide Solution";
      }

      var childs = parent.childNodes;

      for (var _i = 0; _i < childs.length; _i++) {
        var _element = childs[_i];

        if (_element.className == "solution" && parent.className != "open") {
          _element.style.display = "none";
        } else if (_element.className == "solution" && parent.className == "open") {
          _element.style.display = "block";
        }
      }
    });
  }
});