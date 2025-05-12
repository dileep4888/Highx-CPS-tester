let body = document.querySelector ("body");
let button = document.querySelector ("button");
let con = document.querySelector ("#con");
let count = document.querySelector ("#count");
let start = document.querySelector ("#start");
let click = document.querySelector ("#click");
var counter = document.getElementById("counter");
let sec5 = document.querySelector ("#sec5");
let sec10 = document.querySelector ("#sec10");
let sec30 = document.querySelector ("#sec30");
let sec60 = document.querySelector ("#sec60");
let ramaining = document.querySelector("#remaining");
let choose = document.querySelectorAll (".choose");
let test = document.querySelector("#test");
let clickps = document.querySelector("#clickps");
let cross = document.querySelector("#cross");
let tryagain = document.querySelector("#tryagain");
remaining.style.display = "none";
test.style.display = "none";
let choosesec = 10;
let choosen;
let timesup = 0;
var seconds = 10;
let second = seconds;
let cps = 0;
body.style.backgroundColor = "#090909"
selector(sec5, sec10, sec30, sec60)
let theme = 0;


con.addEventListener("click", () => {
    if (count.innerText === "0") {
      start.innerText = "";
      countdown(seconds, remaining, second);
      
      
    }
    count.innerText = Number(count.innerText) + 1;
    const audio = document.getElementById('myAudio');
    audio.currentTime = 0; // Reset to start
    audio.play();
   
    
    
})

tryagain.addEventListener("click", () => {
  test.style.display = "none";
  count.innerText = 0;

});
cross.addEventListener("click", () => {
  test.style.display = "none";
  count.innerText = 0;

});

function countdown(seconds, remaining, second) {
  remaining.style.display = "";

  function tick() {
    var counter = document.getElementById("counter");
    seconds--;
    counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
    
    if (seconds > 0) {
      setTimeout(tick, 1000); // Correct: no parameters needed now
    } else {
      counter.innerText = "0:00";
      average(second);
    }
  }

  tick(); // Initial call, no need to pass `second`
}


function average(second) {
  total = Number(count.innerText);
  let result = total / second;
  resultEle = document.createElement("div");
  resultEle.id = "resultEle"
  test.style.display = "";
  clickps.innerText = String(result + " CPS");

}

function coloring(sec){
  sec.classList.add("selected");
}

function revcoloring(sec) {
  sec.classList.remove("selected");
}

 
function selector(sec5, sec10, sec30, sec60, seconds) {
  if (choosesec === 10) {
    coloring(sec10)
    choosen = sec10
    
  } else if (choosesec === 5) {
    coloring(sec5)
    choosen = sec5
  } else if (choosesec === 30) {
    coloring(sec30)
    choosen = sec30;
  } else if (choosesec === 60) {
    coloring(sec60)
    choosen = sec60;
  }
}

sec5.addEventListener("click", () => {
  revcoloring(choosen)
  choosesec = 5
  seconds = 5
  second = 5
  selector(sec5, sec10, sec30, sec60)
  count.innerText = 0
});
sec10.addEventListener("click", () => {
  revcoloring(choosen)
  choosesec = 10
  seconds = 10
  second = 10
  selector(sec5, sec10, sec30, sec60)
  count.innerText = 0
});
sec30.addEventListener("click", () => {
  revcoloring(choosen)
  choosesec = 30
  seconds = 30
  second = 30
  selector(sec5, sec10, sec30, sec60)
  count.innerText = 0
});
sec60.addEventListener("click", () => {
  revcoloring(choosen)
  choosesec = 60
  seconds = 60
  second = 60
  selector(sec5, sec10, sec30, sec60)
  count.innerText = 0
  
});
