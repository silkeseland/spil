let points;
let liv;
let myRand;
let speed;

const figur1 = document.querySelector("#figur_container1");
const figur12 = document.querySelector("#figur_container12");
const figur2 = document.querySelector("#figur_container22");
const figur22 = document.querySelector("#figur_container2");
const figur3 = document.querySelector("#figur_container3");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  window.addEventListener("resize", windowResize);
  windowResize();

  //Vis Game over
  document.querySelector("#game_over").classList.add("hide");

  //vis level complete
  document.querySelector("#level_complete").classList.add("hide");

  //vis level complete
  document.querySelector("#how_play").classList.add("hide");

  //Vis start skærm
  document.querySelector("#start").classList.remove("hide");

  //Klik på start_knap
  document.querySelector("#start_knap").addEventListener("click", howPlay);
}

function windowResize() {
  console.log("windowResize");
  let widthScreen = document.querySelector("#screen").clientWidth;
  let myFontInProcent1 = 5;
  let myFont1 = (widthScreen / 100) * myFontInProcent1;
  document.querySelector("#score_board").style.fontSize = myFont1 + "px";
  let myFontInProcent2 = 4;
  let myFont2 = (widthScreen / 100) * myFontInProcent2;
  document.querySelector("#level_complete").style.fontSize = myFont2 + "px";
  document.querySelector("#game_over").style.fontSize = myFont2 + "px";
  document.querySelector("#start").style.fontSize = myFont2 + "px";
}
function startGame() {
  console.log("startGame");

  //Skjul andre skærme
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#how_play").classList.add("hide");

  //Nulstil point
  points = 0;
  document.querySelector("#score_board").innerHTML = points;

  //nulstil liv til 3
  liv = 3;
  document.querySelector("#liv1").classList.remove("gray");
  document.querySelector("#liv2").classList.remove("gray");
  document.querySelector("#liv3").classList.remove("gray");

  //nulstil speed
  speed = 1;

  //start tid
  document.querySelector("#time_sprite").classList.add("tid");
  document.querySelector("#time_container").addEventListener("animationend", stopSpillet);

  //BAD giv random position, delay til container og speed

  //sæt variablen lig med et tilfældigt tal mellem 1 og 4
  myRand = Math.floor(Math.random() * 3) + 1;
  //Giv container en random position
  figur1.classList.add("pos" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;
  //Giv container et random delay
  figur1.classList.add("delay" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;
  //Giv container en random speed
  figur1.classList.add("speed" + myRand);

  //Start move_right-animationer på alle elementer
  figur1.classList.add("move_right");

  //Lyt efter move_right-animationer er færdig
  figur1.addEventListener("animationiteration", genstartBad);

  //Lyt efter klik på alle elementer
  figur1.addEventListener("mousedown", clickBad);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 4
  myRand = Math.floor(Math.random() * 3) + 1;
  //Giv container en random position
  figur12.classList.add("pos" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;
  //Giv container et random delay
  figur12.classList.add("delay" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;
  //Giv container en random speed
  figur12.classList.add("speed" + myRand);

  //Start move_right-animationer på alle elementer
  figur12.classList.add("move_right");

  //Lyt efter move_right-animationer er færdig
  figur12.addEventListener("animationiteration", genstartBad);

  //Lyt efter klik på alle elementer
  figur12.addEventListener("mousedown", clickBad);

  //MAN giv random position, delay til container og speed

  //sæt variablen lig med et tilfældigt tal mellem 1 og 4
  myRand = Math.floor(Math.random() * 4) + 1;
  //Giv container en random position
  figur2.classList.add("pos" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;
  //Giv container et random delay
  figur2.classList.add("delay" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;
  //Giv container en random speed
  figur2.classList.add("speed" + myRand);

  //Start move_right-animationer på alle elementer
  figur2.classList.add("move_right");

  //Lyt efter move_right-animationer er færdig
  figur2.addEventListener("animationiteration", genstartMan);

  //Lyt efter klik på alle elementer
  figur2.addEventListener("mousedown", clickMan);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 4
  myRand = Math.floor(Math.random() * 4) + 1;
  //Giv container en random position
  figur22.classList.add("pos" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;
  //Giv container et random delay
  figur22.classList.add("delay" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;
  //Giv container en random speed
  figur22.classList.add("speed" + myRand);

  //Start move_right-animationer på alle elementer
  figur22.classList.add("move_right");

  //Lyt efter move_right-animationer er færdig
  figur22.addEventListener("animationiteration", genstartMan);

  //Lyt efter klik på alle elementer
  figur22.addEventListener("mousedown", clickMan);

  //GIRL giv random position, delay til container og speed

  //sæt variablen lig med et tilfældigt tal mellem 1 og 4
  myRand = Math.floor(Math.random() * 4) + 1;
  //Giv container en random position
  figur3.classList.add("pos" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;
  //Giv container et random delay
  figur3.classList.add("delay" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;
  //Giv container en random speed
  figur3.classList.add("speed" + myRand);

  //Start move_right-animationer på alle elementer
  figur3.classList.add("move_right");

  //Lyt efter move_right-animationer er færdig
  figur3.addEventListener("animationiteration", genstartGirl);

  //Lyt efter klik på alle elementer
  figur3.addEventListener("mousedown", clickGirl);
}

//BAD

function clickBad() {
  console.log("clickBad");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", clickBad);

  //element frys
  this.classList.add("frys");

  //Tæl en op på points og udskriv
  points++;
  document.querySelector("#score_board").innerHTML = points;

  //Undersøg point stiger i hastighed
  if (points >= 4) {
    console.log("4 points");
    speed = 3;
  } else if (points >= 2) {
    console.log("2 points");
    speed = 2;
  }

  //element forsvind
  this.firstElementChild.classList.add("forsvind");

  //element genstart
  this.addEventListener("animationend", genstartBad);
}

function genstartBad() {
  console.log("genstartBad");

  //ryd op, fjern alt er på container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";

  //For at kunne genstarte move_right animationen, da vi fjener og tilføjer den i samme function
  this.offsetLeft;

  //sæt variablen lig med et tilfældigt tal mellem 1 og 4
  myRand = Math.floor(Math.random() * 4) + 1;

  //Giv en position til container
  this.classList.add("pos" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;

  //giv container ny tilfældig speed
  this.classList.add("speed" + myRand);

  //Start move_right-animationer på element
  this.classList.add("move_right");

  //Lyt efter klik på element
  this.addEventListener("mousedown", clickBad);
}

//MAN

function clickMan() {
  console.log("clickMan");

  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", clickMan);

  //element frys
  this.classList.add("frys");

  //Tilføj grå til det liv man er nået til, der efter tæl en ned på liv
  document.querySelector("#liv" + liv).classList.add("gray");
  liv--;

  //element forsvind
  this.firstElementChild.classList.add("forsvind");

  //element genstart
  this.addEventListener("animationend", genstartMan);

  //når liv er 0 eller derunder gå til stop spil
  if (liv <= 0) {
    console.log("0 liv");
    stopSpillet();
  }
}

function genstartMan() {
  console.log("genstartMan");
  //ryd op, fjern alt er på container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";

  //For at kunne genstarte move_right animationen, da vi fjener og tilføjer den i samme function
  this.offsetLeft;

  //sæt variablen lig med et tilfældigt tal mellem 1 og 4
  myRand = Math.floor(Math.random() * 4) + 1;
  //Giv en position til container
  this.classList.add("pos" + myRand);

  //sæt speed på
  this.classList.add("speed" + speed);

  //Start move_right-animationer på element
  this.classList.add("move_right");

  //Lyt efter klik på element
  this.addEventListener("mousedown", clickMan);
}

//GIRL

function clickGirl() {
  console.log("clickGirl");

  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", clickGirl);

  //element frys
  this.classList.add("frys");

  //Tilføj grå til det liv man er nået til, der efter tæl en ned på liv
  document.querySelector("#liv" + liv).classList.add("gray");
  liv--;

  //element forsvind
  this.firstElementChild.classList.add("forsvind");
  //element genstart
  this.addEventListener("animationend", genstartGirl);

  //når liv er 0 eller derunder gå til stop spil
  if (liv <= 0) {
    console.log("0 liv");
    stopSpillet();
  }
}

function genstartGirl() {
  console.log("genstartGirl");

  //ryd op, fjern alt er på container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";

  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  this.offsetLeft;

  //sæt variablen lig med et tilfældigt tal mellem 1 og 4
  myRand = Math.floor(Math.random() * 4) + 1;
  //Giv en position til container
  this.classList.add("pos" + myRand);

  //sæt speed på
  this.classList.add("speed" + speed);

  //Start flyv-animationer på element
  this.classList.add("move_right");

  //Lyt efter klik på element
  this.addEventListener("mousedown", clickGirl);
}

function stopSpillet() {
  console.log("stopSpillet");

  //Stop timer
  document.querySelector("#time_sprite").classList.remove("tid");
  document.querySelector("#time_container").removeEventListener("animationend", stopSpillet);

  //BAD
  //ryd op, fjern alt er på container og sprite
  figur1.classList = "";
  figur1.firstElementChild.classList = "";

  //Lyt efter move_right-animationer er færdig
  figur1.removeEventListener("animationiteration", genstartBad);

  //Lyt efter klik
  figur1.removeEventListener("mousedown", clickBad);

  figur1.removeEventListener("animationend", genstartBad);

  //ryd op, fjern alt er på container og sprite
  figur12.classList = "";
  figur12.firstElementChild.classList = "";

  //Lyt efter move_right-animationer er færdig
  figur12.removeEventListener("animationiteration", genstartBad);

  //Lyt efter klik
  figur12.removeEventListener("mousedown", clickBad);

  figur12.removeEventListener("animationend", genstartBad);

  //MAN

  //ryd op, fjern alt er på container og sprite
  figur2.classList = "";
  figur2.firstElementChild.classList = "";

  //Lyt efter move_right-animationer er færdig
  figur2.removeEventListener("animationiteration", genstartMan);

  //Lyt efter klik
  figur2.removeEventListener("mousedown", clickMan);

  figur2.removeEventListener("animationend", genstartMan);

  //ryd op, fjern alt er på container og sprite
  figur22.classList = "";
  figur22.firstElementChild.classList = "";

  //Lyt efter move_right-animationer er færdig
  figur22.removeEventListener("animationiteration", genstartMan);

  //Lyt efter klik
  figur22.removeEventListener("mousedown", clickMan);

  figur22.removeEventListener("animationend", genstartMan);

  //GIRL

  //ryd op, fjern alt er på container og sprite
  figur3.classList = "";
  figur3.firstElementChild.classList = "";

  //Lyt efter move_right-animationer er færdig
  figur3.removeEventListener("animationiteration", genstartGirl);

  //Lyt efter klik
  figur3.removeEventListener("mousedown", clickGirl);

  figur3.removeEventListener("animationend", genstartGirl);

  if (liv <= 0) {
    gameOver();
  } else if (points >= 5) {
    console.log("5 points");
    levelComplete();
  } else {
    gameOver();
  }
}

function howPlay() {
  console.log("howPlay");

  //Vis gameover skærm

  document.querySelector("#how_play").classList.remove("hide");

  //Klik på genstart1
  document.querySelector("#start_knap1").addEventListener("click", startGame);
}

function gameOver() {
  console.log("GAME OVER");

  //Vis gameover skærm

  document.querySelector("#game_over").classList.remove("hide");

  //Klik på genstart1
  document.querySelector("#try_again").addEventListener("click", startGame);
}

function levelComplete() {
  console.log("LEVEL COMPLETE");

  //Vis levelComplete skærm
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.remove("hide");

  document.querySelector("#Crowd").play();

  //Klik på genstart2
  document.querySelector("#try_again1").addEventListener("click", startGame);
}
