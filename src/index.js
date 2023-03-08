console.log("LOG REPORTS APPEAR HERE");
console.info("Connected to server");


// alert(" This is a preview of CHADS ANIME TWIXTOR. IT IS UNDER CONSTRUCTION")

function hideload() {
    document.getElementById("loading").style.display="none";
}

function openheadermenu() {
    document.getElementById("openmenu").style.display="none";
    document.getElementById("closemenu").style.display="block";
    document.getElementById("closemenu").style.display="block";
    document.getElementById("closemenu").style.margin="0px";
    document.getElementById("closemenu").style.float="right";
    document.getElementById("closemenu").style.position="absolute";
    document.getElementById("closemenu").style.top="16px";
    document.getElementById("closemenu").style.right="16px";
    document.getElementById("headerlinks").style.boxShadow="-20px 0px 10px 10px rgb(0, 0, 23)";
    document.getElementById("headerlinks").style.background="rgb(0, 0, 23)";
    document.getElementById("headerlinks").style.display="block";
    document.getElementById("headerlinks").style.padding="40px 50px";
    document.getElementById("headerlinks").style.float="none";
    document.getElementById("headerlinks").style.position="fixed";
    document.getElementById("headerlinks").style.right="0";
    document.getElementById("headerlinks").style.marginTop="0px";
    document.getElementById("headerlinks").style.top="0";
    document.getElementById("headerlinks").style.height="100%";
    document.getElementById("navbarlinks1").style.display="block";
    document.getElementById("navbarlinks1").style.padding="20px 0px";
    document.getElementById("navbarlinks2").style.display="block";
    document.getElementById("navbarlinks2").style.padding="20px 0px";
    document.getElementById("navbarlinks3").style.display="block";
    document.getElementById("navbarlinks3").style.padding="20px 0px";
    document.getElementById("navbarlinks4").style.display="block";
    document.getElementById("navbarlinks4").style.padding="20px 0px";
    document.getElementById("navbarlinks5").style.display="block";
    document.getElementById("navbarlinks5").style.padding="20px 0px";
}

function closeheadermenu() {
    document.getElementById("openmenu").style.display="block";
    document.getElementById("headerlinks").style.display="none";
}
