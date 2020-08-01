class BaseClass {

constructor(x,y,width,height){
     
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
         }
    this.body = Bodies.rectangle(x,y,30,40,options);
    this.width = 30;
    this.height = 40;
    this.Visiblity = 255;
    World.add(world,this.body);
    }
    display(){
    if(this.body.speed < 3){
    var pos = this.body.position;
    rectMode(CENTER);
    fill(127,127,127);
    rect(pos.x,pos.y,this.width,this.height);
    }
     else{
    World.remove(world, this.body);
    push();
    this.Visiblity = this.Visiblity - 5;
    tint(255,this.Visiblity);
    pop();
    }    
    }
    
    
    
    };