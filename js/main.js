// show sick
function showContent() {
  var mostSoughtDisease = document.querySelector(".most-sought-disease");
  var alphabetElements = document.querySelectorAll(".alphabet");
  function handleEvent() {
    mostSoughtDisease.onclick = function () {
      var ulMostSoughtDisease = mostSoughtDisease.querySelector(
        ".most-sought-disease__list"
      );
      var iconRotate1 =
        mostSoughtDisease.querySelector(".mb-block").firstElementChild;
      var nameAtribute1 = iconRotate1.getAttribute("name");
      if (ulMostSoughtDisease.classList.contains("open")) {
        ulMostSoughtDisease.classList.remove("open");
      } else {
        ulMostSoughtDisease.classList.add("open");
      }
      if (nameAtribute1 == "chevron-forward-outline") {
        iconRotate1.setAttribute("name", "chevron-down-outline");
      } else {
        iconRotate1.setAttribute("name", "chevron-forward-outline");
      }
    };

    /**====================================================== */
    alphabetElements.forEach(function (value, index) {
      value.onclick = function (e) {
        var ulAlphabet = this.querySelector(".alphabet-header__list");
        var iconRotate2 = this.querySelector(".mb-block").firstElementChild;
        var nameAtribute2 = iconRotate2.getAttribute("name");
        if (ulAlphabet.classList.contains("open")) {
          ulAlphabet.classList.remove("open");
        } else {
          ulAlphabet.classList.add("open");
        }
        if (nameAtribute2 == "chevron-forward-outline") {
          iconRotate2.setAttribute("name", "chevron-down-outline");
        } else {
          iconRotate2.setAttribute("name", "chevron-forward-outline");
        }
      };
    });
  }
  handleEvent();
}
showContent();
// end show sick
