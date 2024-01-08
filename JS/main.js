// for quote button 

const quote = document.getElementById("quoteButton");

function changeQuotebutton(){
    quote.style.backgroundColor= "black";
    quote.style.color= "purple";
}

quote.addEventListener("mouseover", changeQuotebutton);

function changeQuoteBack() {
    quote.style.backgroundColor= "purple";
    quote.style.color= "black";
}

quote.addEventListener("mouseout", changeQuoteBack);

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
    logo.style.marginLeft= "650px";
    logo.style.transition= "2s"
}

logo.addEventListener("click", moveLogo)

