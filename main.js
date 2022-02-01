x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
draw_square = "";
draw_triangle=""

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "Please speak the which shape you want to draw. A square, rectangle or circle";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
    if (content == "circle") {
        x = Math.floor(Math.random() * 800 +5);
        y = Math.floor(Math.random() * 500 +5);
        document.getElementById("status").innerHTML = "Started drawing circle ";
        draw_circle = "set";
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random() * 800+5);
        y = Math.floor(Math.random() * 500+5);
        document.getElementById("status").innerHTML = "Started drawing rectangle ";
        draw_rect = "set";
    }
    if (content == "square") {
        x = Math.floor(Math.random() * 800+5);
        y = Math.floor(Math.random() * 500+5);
        document.getElementById("status").innerHTML = "Started drawing square ";
        draw_square = "set";
    }
    if (content == "triangle") {
        x = Math.floor(Math.random() * 800 +5);
        y = Math.floor(Math.random() * 500 +5);
        document.getElementById("status").innerHTML = "Started drawing circle ";
        draw_triangle = "set";
    }
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    fill(204, 101, 192, 127);
    stroke(127, 63, 120);
    if (draw_circle == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn. ";
        draw_circle = "";
    }

    if (draw_rect == "set") {
        rect(x, y, 150, 80);
        document.getElementById("status").innerHTML = "Rectangle is drawn. ";
        draw_rect = "";
    }

    if (draw_square == "set") {
        rect(x, y, 150, 150);
        document.getElementById("status").innerHTML = "Square is drawn. ";
        draw_square = "";
    }
    if (draw_triangle == "set") {
        triangle(18, 18, 18, 360, 81, 360);
        document.getElementById("status").innerHTML = "Square is drawn. ";
        draw_square = "";
    }
    
}







