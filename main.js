var SpeechRecognition = window.webkitSpeechRecognition;

var reconition = new SpeechRecognition();

function start()
{
     document.getElementById("textbox"),innerHTML ="";
     reconition.start();
}

reconition.onresult = function run (event) {

console.log(event);

var Content = event.results[0][0].transcript;

document.getElementById("textbox").innerHTML = Content;
console.log(Content);
if(Content =="take my selfie")
{
     console.log("taking selfie ---");
     speak();
}

}

function speak()
{
     var synth = window.speakSynthesis;

     speak_data = "Taking you selfie in 5 second";

     var utterThis = new SpeechSynthesisUtterance(speak_data);

     synth.speak(utterThis);
     Webcam.attach(camera);

     setTimeout(function()
     {
          take_snapshot();
          save();  
     }, 5000);
     
}
camera = document.getElementById("camera");
Webcam.set({
     width: 320,
     height: 240,
     image_format: 'jpeg',
     jpeg_quality: 90
   });
   

   function take_snapshot()
   {
        Webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML = '<img id="selfie_image" src="' +data_uri+'"/>';
        });    
   }

   function save()
   {
        link = document.getElementById("link");
        image = document.getElementById("selfie_image").src;
        link.herf = image;
        link.click();
   }