var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript.toLowerCase();
    console.log(content);
    if(content=="selfie"){
        console.log("Taking your selfie");
        speak();
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function()
    {
        image_id="selfie1";
        speak_data="Taking your selfie in next 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },5000);
    setTimeout(function()
    {
        image_id="selfie2";
        speak_data="Taking your selfie in next 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },10000);
    setTimeout(function()
    {
        image_id="selfie3";
        take_snapshot();
    },15000);
}

function take_snapshot()
{

    console.log(image_id);

    Webcam.snap(function(data_uri) {
        if(image_id=="selfie1"){
            document.getElementById("result").innerHTML = '<image id="selfie1" src="'+data_uri+'">';
        }
        if(image_id=="selfie2"){
            document.getElementById("result").innerHTML = '<image id="selfie2" src="'+data_uri+'">';
        }
        if(image_id=="selfie3"){
            document.getElementById("result").innerHTML = '<image id="selfie3" src="'+data_uri+'">';
        }
    });
}