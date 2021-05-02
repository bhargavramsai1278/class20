var tomImg,tom
var jerryImg,jerry
var groundImg,ground





function preload() {
    //load the images here
tomImg=loadImg("cat1.png,cat2.png")
jerryImg=loadImg("mouse1.png,mouse2.png")
gardenimg=loadImg("garden.img")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=Createsprite(400,200,80,50)
jerry=Createsprite(200,200,20,50)

}

function draw() {

    background(255);
    
    
console.log(tom.x-jerry.x)
//Write condition here to evalute if tom and jerry collide


if(tom.x-jerry.x<jerry.width/2+tom.width/2
  
    && jerry.x-tom.x<jerry.width/2+tom.width/2
  
    && tom.y-jerry.y<jerry.height/2+tom.height/2
  
    && jerry.y-tom.y<jerry.height/2+tom.height/2){


    tom.loadImg("cat3.png")
    jerry.loadImg("mouse3.png")

     }
     else{
    tom.loadImg("cat4.png")
    jerry.loadImg("mouse4.png")
    }
    
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
