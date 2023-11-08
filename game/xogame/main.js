// main.js //
var playerTurn="X";
var gameOver=false, moves=0;
let notClickId = ["d1","d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9"];
let straightcolor = "rgb(240,250,230)";

function disableClick(value, index, array) {
  document.getElementById(value).onclick=null;
}

function restart() {
  window.location.reload(true);
  /*gameOver = false;
  moves = 0;
  notClickId = ["d1","d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9"];
  playerTurn="X";
  document.getElementById("turn").innerHTML=playerTurn;
  for (let i=0; i<notClickId.length; i++) {
    document.getElementById(notClickId[i]).style.backgroundColor="rgb(230,230,250)";
    document.getElementById(notClickId[i]).innerHTML="&nbsp;";
    document.getElementById(notClickId[i]).onclick=play();
  }*/
}

function check_straight(turn) {
  let cell1 = document.getElementById("d1");
  let cell2 = document.getElementById("d2");
  let cell3 = document.getElementById("d3");
  let cell4 = document.getElementById("d4");
  let cell5 = document.getElementById("d5");
  let cell6 = document.getElementById("d6");
  let cell7 = document.getElementById("d7");
  let cell8 = document.getElementById("d8");
  let cell9 = document.getElementById("d9");

  var hor1= ((cell1.innerHTML==turn && cell2.innerHTML==turn) &&  cell3.innerHTML==turn);
  var hor2= ((cell4.innerHTML==turn && cell5.innerHTML==turn) &&  cell6.innerHTML==turn);
  var hor3= ((cell7.innerHTML==turn && cell8.innerHTML==turn) &&  cell9.innerHTML==turn);
  var ver1= ((cell1.innerHTML==turn && cell4.innerHTML==turn) &&  cell7.innerHTML==turn);
  var ver2= ((cell2.innerHTML==turn && cell5.innerHTML==turn) &&  cell8.innerHTML==turn);
  var ver3= ((cell3.innerHTML==turn && cell6.innerHTML==turn) &&  cell9.innerHTML==turn);
  var cro1= ((cell1.innerHTML==turn && cell5.innerHTML==turn) &&  cell9.innerHTML==turn);
  var cro2= ((cell3.innerHTML==turn && cell5.innerHTML==turn) &&  cell7.innerHTML==turn);
  if (hor1 || hor2 || hor3 || ver1 || ver2 || ver3 || cro1 || cro2) {
    gameOver=true;
    notClickId.forEach(disableClick);
    document.getElementById("winsound").play();
    //alert(turn+" win!!!");
    if (hor1) {
      cell1.style.backgroundColor=straightcolor;
      cell2.style.backgroundColor=straightcolor;
      cell3.style.backgroundColor=straightcolor;
    }
    if (hor2) {
      cell4.style.backgroundColor=straightcolor;
      cell5.style.backgroundColor=straightcolor;
      cell6.style.backgroundColor=straightcolor;
    }
    if (hor3) {
      cell7.style.backgroundColor=straightcolor;
      cell8.style.backgroundColor=straightcolor;
      cell9.style.backgroundColor=straightcolor;
    }
    if (ver1) {
      cell1.style.backgroundColor=straightcolor;
      cell4.style.backgroundColor=straightcolor;
      cell7.style.backgroundColor=straightcolor;
    }
    if (ver2) {
      cell2.style.backgroundColor=straightcolor;
      cell5.style.backgroundColor=straightcolor;
      cell8.style.backgroundColor=straightcolor;
    }
    if (ver3) {
      cell3.style.backgroundColor=straightcolor;
      cell6.style.backgroundColor=straightcolor;
      cell9.style.backgroundColor=straightcolor;
    }
    if (cro1) {
      cell1.style.backgroundColor=straightcolor;
      cell5.style.backgroundColor=straightcolor;
      cell9.style.backgroundColor=straightcolor;
    }
    if (cro2) {
      cell3.style.backgroundColor=straightcolor;
      cell5.style.backgroundColor=straightcolor;
      cell7.style.backgroundColor=straightcolor;
    }
    var x = confirm(turn+" WIN!!! Play Again?");
    if (x) {
      const myTimeout = setTimeout(restart, 3000);
    }
    /*for (let i=1; i<10; ++i) {
      if (document.getElementById("d"+i).innerHTML==turn) {
        document.getElementById("d"+i).style.backgroundColor="rgb(240,250,230)";
      }
    }*/
  } 
  if (moves >= 9 && !gameOver) {
    gameOver=true;
    notClickId.forEach(disableClick);
    moves=0;
    //alert(" a bore draw!!!");
    var x = confirm(" A BORE DRAW!!!, PLAY AGAIN?");
    if (x) {
     const myTimeout = setTimeout(restart, 1000);
    }
  }
}
    
function play(o) {
  moves++;
  let cellClicked= document.getElementById(o);
  cellClicked.innerHTML=playerTurn;
  cellClicked.style.backgroundColor="rgb(240,230,250)";
  cellClicked.onclick=null;
  notClickId.splice(notClickId.indexOf(o),1);
  if (playerTurn=="X"){
    playerTurn="O";
  } else {
    playerTurn="X";
  }
  document.getElementById("turn").innerHTML=playerTurn;
	check_straight("X");
  check_straight("O");
}