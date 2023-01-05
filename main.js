function setup(){
    canvas=createCanvas(940,780);
    canvas.position(300,300);
    video=createCapture(VIDEO);
    video.hide();
  
    tint_color="";
}

function draw(){
    image(video,300,100,400,250);
    fill(0,0,0)
    rect(190, 40, 600, 20);
    fill(0,0,0)
    rect(190, 400, 600, 20);
    fill(0,0,0)
    rect(190, 80, 20, 300);
    fill(255,0,0);
    ellipse(200,50,80,80);
    fill(255,0,0);
    ellipse(200,400,80,80);
    fill(0,0,0)
    rect(790, 80, 20, 300);
    fill(255,0,0);
    ellipse(800,50,80,80);
    fill(255,0,0);
    ellipse(800,400,80,80);
 
}


function take_snapshot(){
    save('snapshot.png');
}