
// accordion -----------------------------
let accordionitems = document.querySelectorAll(".accordion-item");

accordionitems.forEach(item => {
    let lable = item.querySelector(".accordion-lable");
    let content = item.querySelector(".accordion-content");
    lable.addEventListener('click', function () {
        for (i = 0; i < accordionitems.length; i++) {
            if (accordionitems[i] == item) {
                item.classList.toggle("active");
            }
            else {
                accordionitems[i].classList.remove("active");
            }
        }
    });
});


// tab module --------------------------------
var tabbtn = document.querySelectorAll(".tab-btn");

for (var i = 0; i < tabbtn.length; i++) {
    tabbtn[i].addEventListener("click", function () {

        var tabid = this.dataset.tab;
        var tabcontent = document.getElementById(tabid);

        var alltabcontent = document.querySelectorAll(".tab-content");
        var alltabbtn = document.querySelectorAll(".tab-btn");

        for (var j = 0; j < alltabcontent.length; j++) {
            alltabcontent[j].style.display = "none";
        }

        for (var k = 0; k < alltabbtn.length; k++) {
            alltabbtn[k].classList.remove("active");
        }

        tabcontent.style.display = "block";
        this.classList.add("active");
    });
}
document.querySelector(".tab-btn").click();

// second mega navigation ---------------
let secnav = document.querySelector(".navigation-btn");
secnav.addEventListener('click', function () {
    document.querySelector(".navigation-title").classList.toggle("block");
    document.querySelector(".navigation-btn").classList.toggle("resposive-nav-btn");
    document.querySelector(".navigation-link").classList.toggle("not-click");
});