document.addEventListener("DOMContentLoaded", function () {
  const elements = {
    overlap6: document.querySelector(".overlap-6"),
    group1: document.querySelector(".group-1"),
    group2: document.querySelector(".group-2 .overlap-section"),
    group3: document.querySelector(".group-3 .overlap-section"),
    radioUnit1: document.getElementById("unit-1"),
    radioUnit2: document.getElementById("unit-2"),
    radioUnit3: document.getElementById("unit-3"),
    overlapGroup: document.querySelector(".overlap-group"),
    group2Overlap6: document.querySelector(".group-2 .overlap-6"),
    overlapGroupWrapper: document.querySelector(".overlap-group-wrapper"),
    overlapGroup2: document.querySelector(".overlap-group-2"),
  };

  elements.group2.style.display = "none";
  elements.group3.style.display = "none";

  function resetAll() {
    document.querySelectorAll(".overlap-section").forEach((section) => {
      section.style.display = "none";
    });

    elements.overlap6.style.cssText =
      "height: 74px; background-color: #ffffff; border: 2px solid #c7c7c7;";
    elements.overlapGroup.style.cssText =
      "height: 74px; background-color: #ffffff; border: 2px solid #c7c7c7;";
    elements.overlapGroup2.style.cssText =
      "height: 74px; background-color: #ffffff; border: 2px solid #c7c7c7;";

    elements.radioUnit1.checked = false;
    elements.radioUnit2.checked = false;
    elements.radioUnit3.checked = false;
  }

  elements.overlap6.addEventListener("click", function () {
    resetAll();
    elements.group2.style.display = "block";
    elements.overlap6.style.cssText =
      "height: 174px; background-color: #fff8f9; border: 2px solid #ff6b82;";
    elements.group1.style.top = "194px";
    elements.group1.style.height = "auto";
    elements.radioUnit1.checked = true;
    elements.overlapGroupWrapper.style.top = "289px";
  });

  elements.overlapGroup.addEventListener("click", function () {
    resetAll();
    document.querySelector(".group-1 .overlap-section").style.display = "block";
    elements.overlapGroup.style.cssText =
      "height: 174px; background-color: rgb(255, 248, 249); border: 2px solid rgb(255, 107, 130);";
    elements.group1.style.top = "94px";
    elements.overlapGroupWrapper.style.top = "289px";
    elements.radioUnit2.checked = true;
  });

  elements.overlapGroupWrapper.addEventListener("click", function () {
    resetAll();
    elements.group3.style.display = "block";
    elements.overlapGroup2.style.cssText =
      "height: 174px; background-color: rgb(255, 248, 249); border: 2px solid rgb(255, 107, 130);";
    elements.overlapGroupWrapper.style.top = "189px";
    elements.group1.style.cssText = "top: 94px; height: auto;";
    elements.radioUnit3.checked = true;
  });
});
