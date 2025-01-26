
var font;
var vehicles = [];

function preload(){
    font = loadFont('Pokemon-Hollow.ttf');
}

function setup() {
    createCanvas(1300, 500)
    background(51);
    textFont(font);
    // textSize(128)
    // fill(255)
    // noStroke()
    // text('Anand Balamurugan', 60, 200)

    var points = font.textToPoints('Anand', 200, 350,300);

    for (let i = 0; i < points.length; i++) {
        var pt = points[i];
        var v = new Vehicle(pt.x, pt.y);
        this.vehicles.push(v);
    }

    //  textFont(font);
    //  textSize(128);
    //  fill(255);
    //  noStroke();
    //  text("valie", 140 , 400)
}

function draw() {
    background(0);
    for (let i = 0; i < vehicles.length; i++) {
        vehicles[i].behaviours();
        vehicles[i].update()
        vehicles[i].show()

    }


}
