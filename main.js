
// ----- NAVBAR MOVEMENT -----
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = `-${document.querySelector("#header").offsetHeight}px`;
    }
    prevScrollpos = currentScrollPos;
}



// ----- AUTO-SCROLL FOR ux/ui - d&a - aboutMe -----
let scrollToSection = (number) => {

    if (window.location.pathname != '/jPot3/') {            // -> sustituir por el nombre del repo de Github. ** ENTRE BARRAS!
        sessionStorage.setItem("sectionToGo", number)
        window.location.pathname = '/jPort3/'               // -> sustituir por el nombre del repo de Github. ** ENTRE BARRAS!

    } else {
        let newScrollHeight = document.querySelectorAll("body > main > section ")[number].offsetTop + 100
        window.scrollTo({ top: newScrollHeight, behavior: 'smooth' })
    }
}

window.onload = function auxFunction() {

    var storedSectionToGo = sessionStorage.getItem("sectionToGo")

    if (!!storedSectionToGo && storedSectionToGo !== '2') {
        let newScrollHeight = document.querySelectorAll("body > main > section > h2")[storedSectionToGo * 1].offsetTop
        window.scrollTo({ top: newScrollHeight, behavior: 'smooth' })
        sessionStorage.removeItem("sectionToGo")
    } else if (!!storedSectionToGo && storedSectionToGo === '2') {
        let newScrollHeight = document.querySelectorAll("body > main > section > h2")[1].offsetTop + document.querySelectorAll("body > main > section ")[1].clientHeight
        window.scrollTo({ top: newScrollHeight, behavior: 'smooth' })
        sessionStorage.removeItem("sectionToGo")
    }
}


// ----- MOUSE -----
// document.body.onmousemove = function (e) {
//   document.documentElement.style.setProperty(
//     '--x', (
//       e.clientX + window.scrollX
//     )
//   + 'px'
//   );
//   document.documentElement.style.setProperty(
//     '--y', (
//       e.clientY + window.scrollY
//     )
//   + 'px'
//   );
// }


// ----- CONTACT VIA EMAIL -----
let mailto = () => {
    window.location = "mailto:jorgemaestroaguilera@gmail.com"
}

let callto = () => {
    window.open('tel:+34617981978')
}