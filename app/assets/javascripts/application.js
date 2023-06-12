/* global $ */

//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
  // Get the button that opens the modal
  var btn = document.querySelectorAll("a.modal-button");

  // All page modals
  var modals = document.querySelectorAll(".modal");

  // Get the <span> element that closes the modal
  var spans = document.getElementsByClassName("close");

  // When the user clicks the button, open the modal
  for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
      e.preventDefault();
      modal = document.querySelector(e.target.getAttribute("href"));
      modal.style.display = "block";
    };
  }

  // When the user clicks on <span> (x), close the modal
  for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
      for (var index in modals) {
        if (typeof modals[index].style !== "undefined")
          modals[index].style.display = "none";
      }
    };
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
      for (var index in modals) {
        if (typeof modals[index].style !== "undefined")
          modals[index].style.display = "none";
      }
    }
  };

  // Get the button that opens the modal
  var btn = document.querySelectorAll("img.modal-button");

  // All page modals
  var modals = document.querySelectorAll(".modal");

  // Get the <span> element that closes the modal
  var spans = document.getElementsByClassName("close");

  // When the user clicks the button, open the modal
  for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
      e.preventDefault();
      modal = document.querySelector(e.target.getAttribute("href"));
      modal.style.display = "block";
    };
  }

  // When the user clicks on <span> (x), close the modal
  for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
      for (var index in modals) {
        if (typeof modals[index].style !== "undefined")
          modals[index].style.display = "none";
      }
    };
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
      for (var index in modals) {
        if (typeof modals[index].style !== "undefined")
          modals[index].style.display = "none";
      }
    }
  };

  function showDisadvantaged() {
    var x = document.getElementById("showDisadvantaged");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function showSecondary() {
    var x = document.getElementById("showSecondary");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function showSchoolsKey() {
    var x = document.getElementById("showSchoolsKey");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function showAcademicQualifications() {
    var x = document.getElementById("showAcademicQualifications");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function showApplied() {
    var x = document.getElementById("showApplied");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function showMATCharacteristics() {
    var x = document.getElementById("showMATCharacteristics");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  $("#enteringEbacc").height($("#progress8").height());

  function changeImageDisadvantaged() {
    if (
      document.getElementById("imgDisadvantaged").getAttribute("src") ==
      "/public/images/plus.svg"
    ) {
      document.getElementById("imgDisadvantaged").src =
        "/public/images/minus.svg";
    } else {
      document.getElementById("imgDisadvantaged").src = "/public/images/plus.svg";
    }
  }

  function changeImageAcademic() {
    if (
      document.getElementById("imgAcademic").getAttribute("src") ==
      "/public/images/plus.svg"
    ) {
      document.getElementById("imgAcademic").src = "/public/images/minus.svg";
    } else {
      document.getElementById("imgAcademic").src = "/public/images/plus.svg";
    }
  }

  function changeImageGeneral() {
    if (
      document.getElementById("imgGeneral").getAttribute("src") ==
      "/public/images/plus.svg"
    ) {
      document.getElementById("imgGeneral").src = "/public/images/minus.svg";
    } else {
      document.getElementById("imgGeneral").src = "/public/images/plus.svg";
    }
  }

  function changeImageMATCharacteristics() {
    if (
      document.getElementById("imgMATCharacteristics").getAttribute("src") ==
      "/public/images/plus.svg"
    ) {
      document.getElementById("imgMATCharacteristics").src = "/public/images/minus.svg";
    } else {
      document.getElementById("imgMATCharacteristics").src = "/public/images/plus.svg";
    }
  }

})
