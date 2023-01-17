// Funcția pentru afișarea secțiunii "Despre"
function showAbout() {
    document.getElementById("despre").style.display = "block";
    document.getElementById("dinozauri").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

// Funcția pentru afișarea secțiunii "Dinozauri"
function showDinos() {
    document.getElementById("despre").style.display = "none";
    document.getElementById("dinozauri").style.display = "block";
    document.getElementById("contact").style.display = "none";
}

// Funcția pentru afișarea secțiunii "Contact"
function showContact() {
    document.getElementById("despre").style.display = "none";
    document.getElementById("dinozauri").style.display = "none";
    document.getElementById("contact").style.display = "block";
}

// Adăugați event listener pentru butonul "Despre" din navbar
document.getElementById("about-nav").addEventListener("click", showAbout);

// Adăugați event listener pentru butonul "Dinozauri" din navbar
document.getElementById("dinos-nav").addEventListener("click", showDinos);

// Adăugați event listener pentru butonul "Contact" din navbar
document.getElementById("contact-nav").addEventListener("click", showContact);
