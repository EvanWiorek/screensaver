//Scaling transition for navbar link elements
function scale(element, value) {
  element.style.transform = "scale(" + value + ")";
}

//Themes
const theme1 = `background: linear-gradient(-45deg, #0CBABA, #380036);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
height: 100vh;
overflow: hidden;`;

const theme2 = `background: linear-gradient(-45deg, #009FC2, #0D0A0B);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
height: 100vh;
overflow: hidden;`;

const theme3 = `background: linear-gradient(-45deg, #0F2027, #203A43, #2C5364);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
height: 100vh;
overflow: hidden;`;

const theme4 = `background: linear-gradient(-45deg, #414141, #000000);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
height: 100vh;
overflow: hidden;`;

const theme5 = `background: linear-gradient(-45deg, #2C3E50, #000000);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
height: 100vh;
overflow: hidden;`;

const theme6 = `background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
height: 100vh;
overflow: hidden;`;

const theme7 = `background: linear-gradient(-45deg, #aa4b6b, #6b6b83, #3b8d99);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
height: 100vh;
overflow: hidden;`;

const theme8 = `background: linear-gradient(-45deg, #000000, #230d0d, #aa0000, #aa0000);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
height: 100vh;
overflow: hidden;`;

const theme9 = `background: linear-gradient(
  -45deg,
  #03538d,
  #012343,
  #012243,
  #4f0d0d,
  #740109,
  #a10f16
);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
height: 100vh;
overflow: hidden;`;

const theme10 = `background: linear-gradient(
  -45deg,
  #58b4d7,
  #19567e,
  #052b44,
  #4f0d0d,
  #740109,
  #a10f16
);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
height: 100vh;
overflow: hidden;`;

const MCU = document.getElementById("MCU");
const Raimi = document.getElementById("Raimi");

let background = document.getElementById("background");

const changeTheme = (element) => {
  // console.log(element.id);
  if (element.id === "theme1") {
    background.style = theme1;
    MCU.style.display = "none";
    Raimi.style.display = "none";
  }
  if (element.id === "theme2") {
    background.style = theme2;
    MCU.style.display = "none";
    Raimi.style.display = "none";
  }
  if (element.id === "theme3") {
    background.style = theme3;
    MCU.style.display = "none";
    Raimi.style.display = "none";
  }
  if (element.id === "theme4") {
    background.style = theme4;
    Raimi.style.display = "none";
    MCU.style.display = "none";
  }
  if (element.id === "theme5") {
    background.style = theme5;
    Raimi.style.display = "none";
    MCU.style.display = "none";
  }
  if (element.id === "theme6") {
    background.style = theme6;
    Raimi.style.display = "none";
    MCU.style.display = "none";
  }
  if (element.id === "theme7") {
    background.style = theme7;
    Raimi.style.display = "none";
    MCU.style.display = "none";
  }
  if (element.id === "theme8") {
    background.style = theme8;
    Raimi.style.display = "none";
    MCU.style.display = "none";

  }
  if (element.id === "theme9") {
    background.style = theme9;
    Raimi.style.display = "block";
    MCU.style.display = "none";

  }
  if (element.id === "theme10") {
    background.style = theme10;
    Raimi.style.display = "none";
    MCU.style.display = "block";
  }
};
