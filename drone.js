const ProjectTxt = document.querySelector("#project-text");
const Img = document.querySelector("#info-img");


const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");

button1.onclick = changeBtn1;
button2.onclick = changeBtn2;
button3.onclick = changeBtn3;
button4.onclick = changeBtn4;

function changeBtn1() {
    Img.src = 'img-used/pr2.jpg';
    ProjectTxt.innerText = "If you're in a disaster zone, click here to request immediate help. Our drones will connect you to local emergency services and provide communication support.";
}

function changeBtn2() {
    Img.src = 'img-used/pr4.jpg';
    ProjectTxt.innerText = "Locate nearby shelters, food stations, and relief camps through our real-time map powered by drone networks.";
}

function changeBtn3() {
    Img.src = 'img-used/pr5.jpg';
    ProjectTxt.innerText = "Stay informed with the latest updates from disaster zones. Get real-time alerts about rescue operations, safety measures, and more.";
}

function changeBtn4() {
    Img.src = 'img-used/pr7.jpg';
    ProjectTxt.innerText = "Explore available financial aid and support programs for disaster recovery. Get help with emergency funds, relief grants, and rebuilding efforts.";
}
