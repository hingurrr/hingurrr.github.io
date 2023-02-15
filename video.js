
var audio = document.getElementById("myAudio");
const endDate = new Date("2022-11-17");
const today = new Date();
const remainingDays = Math.ceil(-(endDate - today) / (1000 * 60 * 60 * 24));

const messages = ["","L o a d i n g . . . ",
    `성화야 벌써 우리가 만난지 ${remainingDays}일이야 ! ! !  `,
    "홍대에서 정말 이쁜 성화한테 번호를 물어보고  ",
    "회기 꼴목에서 만나 삼계탕을 먹을 때는 어색했는데...  ",
    `벌써${remainingDays}일이라니 엄청 빠르지?  `,
    "회기 길동 잠실 압로 코엑스 논현 광화문   ",
    "아직 많은 동네를 놀러 가지 못했지만,  ",
    "그만큼 앞으로 우리가 가볼 곳이 많다는 거야!!  ",
    `성화랑 함께한 ${remainingDays}일 너무 행복했고  `,
    "앞으로도 평생 내 옆에 딱 붙어서 함께해 줘 ! @ !  ",
    "엄청 엄청 사랑하고, 나랑 만나줘서 고마워 성화야  ",
    "1 0 0 일 축 하 해   ",
    "우리 이쁜성화를 이 세상에서 제일 많이 많이 사랑하는  ",
    "- 도 라 프 -      ",
   
];

let i = 0;
const message = document.getElementById("message");
const playButton = document.getElementById("playButton");

const typeMessage = function() {
  if (i < messages[0].length) {
    if (i > 18){
      changeBackground();
  } else {
    i = i
  }
    message.innerHTML += messages[0][i];
    i++;
    setTimeout(typeMessage, 200);
  } else {
    message.innerHTML = "";
    
    i = 0;
    messages.shift();
    if (messages.length > 0) {
      setTimeout(typeMessage, 500);
    } 
    else {
        document.getElementById("message").style.border = "none";
        document.getElementById("message").style.padding = "none";
        document.getElementById("message").style.background = "none";
        document.getElementById("message").style.boxShadow = "none";
       
      playButton.style.display = "block";
    }
  }
};

message.addEventListener("click", function() {
  playAudio();
  typeMessage();
});

function  playAudio(){
  audio.volume = 0.2;
  audio.play();
  
}

function pauseAudio() {
  audio.pause();
}

const videoContainer = document.getElementById("videoContainer");

playButton.addEventListener("click", function() {
  
  pauseAudio(); 
  const video = document.createElement("iframe");
  video.src = "https://www.youtube.com/embed/A99FkxCUSks";
  video.frameborder = "0";
  video.allowFullscreen = "1";
  video.width = "100%";
  video.height = "100%";

  videoContainer.innerHTML = "";
  videoContainer.appendChild(video);
  videoContainer.style.display = "block";
  playButton.style.display = "none";
   
});



function changeBackground() {
  document.body.style.backgroundImage = "url('./bk1.png')";
  document.body.style.backgroundPosition = "center";

  
}
