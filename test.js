/**
 * Created by ym on 15-5-9.
 */
var video = document.getElementById("video");
var context = canvas.getContext("2d")
var errocb = function () {
    console.log('sth wrong!');
}

if (navigator.getUserMedia) { // 标准的API
    navigator.getUserMedia({ "video": true }, function (stream) {
        video.src = stream;
        video.play();
    }, errocb);
} else if (navigator.webkitGetUserMedia) { // WebKit 核心的API
    navigator.webkitGetUserMedia({ "video": true }, function (stream) {
        video.src = window.webkitURL.createObjectURL(stream);
        video.play();
    }, errocb);
}


document.getElementById("picture").addEventListener("click", function () {
    context.drawImage(video, 0, 0, 640, 480);
});