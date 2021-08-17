class Paperball{

    constructor(){
        var options={
    isStatic:false,
    restitution:0.3,
    friction:1.2,
    density:1.2
    }
    this.body=Bodies.circle(95,100,15,options);
    this.radius=70;
   
    this.image=loadImage("images/ball.png");

    World.add(world,this.body)
    }
    display(){
        push();
        translate (this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop ();
    
    
    
    
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }