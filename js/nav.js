function hideAll(){
    var a = document.getElementById("home");
    var b = document.getElementById("services");
    var c = document.getElementById("about");
    var d = document.getElementById("contact");
    a.style.display="none";
    b.style.display="none";
    c.style.display="none";
    d.style.display="none";
}

function showHome() {
    hideAll();
    document.getElementById("home").style.display="block";
}

function showServices() {
    hideAll();
    document.getElementById("services").style.display="block";
}

function showAbout() {
    hideAll();
    document.getElementById("about").style.display="block";
}

function showContact() {
    hideAll();
    document.getElementById("contact").style.display="block";
}

