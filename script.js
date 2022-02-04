'use strict';









/*###########
中央部分の動き
############# */

let center_icon = document.getElementById("center_icon");
let center_reload = document.getElementById("center_reload")
let play =document.getElementById("start");
let stop =document.getElementById("stop");

center_icon.addEventListener('click',function() {
  start.classList.toggle("hidden")
  stop.classList.toggle("hidden")
});


// center_reload.addEventListener('click', function() {
//   console.log("リロード");
// });



// 右部分のjsを記述
const song = document.querySelector(".song");
const sounds = document.querySelectorAll(".right_weather_button button");
const video = document.querySelector(".video");
const replay = document.querySelector(".center_reload");

//画面右の天気選択ボタンを押した時、背景の動画と音楽を変更
sounds.forEach(sound => {
  sound.addEventListener("click", function() {
    song.src = this.getAttribute("data-sound");//クリックしたボタンに関連する音楽を流す・srcに代入する
    video.src = this.getAttribute("data-video");//クリックしたボタンに関連するビデオを流す・srcに代入する
    checkPlaying(song);//checkPlaying関数を発火
  });
});

//円の中央のアイコンを押した時の処理
start.addEventListener("click", function() {
  checkPlaying(song);
});

stop.addEventListener("click", function() {
  checkPlaying(song);
});



//円の下のリロードボタンを押した時の処理
replay.addEventListener("click", function() {
    restartSong(song);
    
  });

const restartSong = song =>{
    song.currentTime = 0;
    console.log("ciao")

}

const checkPlaying = song => {
  if (song.paused) {
    song.play();
    video.play();
    console.log('play');
  } else {
    song.pause();
    video.pause();
    console.log('pause');

  }
};




const timeDisplay = document.querySelector(".time-display");
const timeSelect = document.querySelectorAll(".left button");
let fakeDuration = 600;

//左の時間選択ボタンを押した時の処理
timeSelect.forEach(option => {
  option.addEventListener("click", function() {
    fakeDuration = this.getAttribute("data-time");
    song.currentTime = 0;
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    )}`;
  });
});

//中央の円の見た目に関する処理
song.ontimeupdate = function() {
  let currentTime = song.currentTime;
  let elapsed = fakeDuration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes}:${seconds}`;
  let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
  outline.style.strokeDashoffset = progress;

  if (currentTime >= fakeDuration) {
    song.pause();
    song.currentTime = 0;
    play.src = "./svg/play.svg";
    video.pause();
  }
};