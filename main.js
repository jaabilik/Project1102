// link:  //
Webcam.set ({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:110 
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captures_image" style="height: 270; width: 350px;" src="'+data_uri+'"/>';
    });
}

console.log('ml5 seconds until your computer DOESNT blow up: ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Fl6kGkY1M/model.json', modelLoaded);

function modelLoaded() {
    console.log('ready to burst into NOT flames?? (๑•̀ㅂ•́)و✧');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "first prediction - " + prediction_1;
    speak_data_2 = "second prediction - " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speal_data_1 + speak_data_2);
    synth.speak(utterThis);
}