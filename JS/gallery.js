//for navigation in head

const navHead = document.querySelector(".navHead");

function changeToblack(){
    navHead.style.backgroundColor= "black";
}

navHead.addEventListener("mouseover", changeToblack)

function changeBack(){
    navHead.style.backgroundColor= "white";
}

navHead.addEventListener("mouseout", changeBack)


//move logo

const logo = document.getElementById("logo")

function moveLogo (){
    logo.style.marginLeft= "600px";
    logo.style.transition= "2s"
}

logo.addEventListener("click", moveLogo)