var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
  document.getElementById("textbox").innerHTML = "";
  recognition.start();
}

recognition.onresult = function run(event) {
  console.log(event);

  var content = event.results[0][0].transcript;

  if (content == "take my selfie") {
    console.log("content=" + content);
    document.getElementById("textbox").innerHTML = content;
    speak();
  }

}


function speak() {
  var synth = window.speechSynthesis;
  //speakdata = document.getElementById("textbox").value;
  speakdata = "Taking You Selfie in 5 seconds"
  var utterthis = new SpeechSynthesisUtterance(speakdata);
  synth.speak(utterthis);
  Webcam.attach(camera);

  setTimeout(function () {
    take_snapshot();
    save();
  }, 5000);


}

Webcam.set({
  width: 380,
  height: 250,
  image_format: 'png',
  png_quality: 90

});

camera = document.getElementById("camera");

function take_snapshot() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = "<img id='selfie_img' src='" + data_uri + "'>";
  });
}

function save() {
  link = document.getElementById("link");
  image = document.getElementById("selfie_img").src;
  link.href = image;
  link.click();
}

