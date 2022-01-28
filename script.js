'use strict';









/*　###########
中央部分の動き
############# */

let center_icon = document.getElementById("center_icon");
let center_reload = document.getElementById("center_reload")

center_icon.addEventListener('click',function() {
  let start =document.getElementById("start");
  let stop =document.getElementById("stop");
  start.classList.toggle("hidden")
  stop.classList.toggle("hidden")
});


center_reload.addEventListener('click', function() {
  console.log("リロード");
});



// 右部分のjsを記述

function cloud(){
console.log("cloud")
};

function sun(){
console.log("sun")
};

