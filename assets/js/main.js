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

// first mega navigation ---------------------------
let nav = document.querySelector(".nav-btn");
nav.addEventListener("click", function () {
    document.querySelector(".nav-title").classList.toggle("block");
    document.querySelector(".nav-btn").classList.toggle("resposive-nav-btn");
});

// first mega navigation sub item open
let meganav = document.querySelectorAll(".mega-nav");
meganav.forEach(meganavitem => {
    let subnav = meganavitem.querySelector(".secondary-nev");
    meganavitem.addEventListener('click', function () {
        for (let i = 0; i < meganav.length; i++) {
            if (meganav[i] == meganavitem) {
                subnav.classList.toggle("mega-nav-block");
            }
        }
    });
});

// second mega navigation ---------------
let secnav = document.querySelector(".navigation-btn");
secnav.addEventListener('click', function () {
    document.querySelector(".navigation-title").classList.toggle("block");
    document.querySelector(".navigation-btn").classList.toggle("resposive-nav-btn");
});

// second mega menu sub navigation open
let secmeganavigation = document.querySelectorAll(".mega-navigation");
secmeganavigation.forEach(navitem => {
    let secbtn = navitem.querySelector(".ancor");
    let show = navitem.querySelector(".mega-nav-two");
    let backbtn = navitem.querySelector(".responsive-back-btn");

    secbtn.addEventListener('click', function () {
        show.classList.add("sec-mega-nav-block");
    });

    backbtn.addEventListener('click', function () {
        show.classList.remove("sec-mega-nav-block");
    });
});