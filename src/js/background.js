// Define color code for each color //
var red = Math.floor(Math.random() * 256);
var green = Math.floor(Math.random() * 256);
var blue = Math.floor(Math.random() * 256);

var r = 1;
var g = 1;
var b = 1;

var color_timer = setInterval(color_set, 100);

function random() {
    var color = Math.floor(Math.random() * 4);
    return color;
}

function check_red(red, local) {
    color_new_var = random();

    if (red >= 255) {
        r = 0;
    } else if (red <= 1) {
        r = 1;
    }

    if (local === 1) {} else if (local === 0) {
        color_new_var = color_new_var * -1;
    }
    return color_new_var;
}

function check_green(green, local) {
    color_new_var = random();

    if (green >= 255) {
        g = 0;
    } else if (green <= 1) {
        g = 1;
    }

    if (local === 1) {} else if (local === 0) {
        color_new_var = color_new_var * -1;
    }
    return color_new_var;
}

function check_blue(blue, local) {
    color_new_var = random();

    if (blue >= 255) {
        b = 0;
    } else if (blue <= 1) {
        b = 1;
    }

    if (local === 1) {} else if (local === 0) {
        color_new_var = color_new_var * -1;
    }
    return color_new_var;
}

function color_set() {


    red = red + check_red(red, r);
    green = green + check_green(green, g);
    blue = blue + check_blue(blue, b);

    //console.log("Red: " + red + " " + r);
    //console.log("Green: " + green + " " + g);
    //console.log("Blue: " + blue + " " + b);

    var start_color = 'rgb(' + red.toString() + ', ' + green.toString() + ', ' + blue.toString() + ')';
    //console.log(start_color);

    document.getElementById("body-id").style.backgroundColor = start_color.toString();
}