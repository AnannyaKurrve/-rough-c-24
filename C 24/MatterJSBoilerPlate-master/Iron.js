class Iron{
    constructor(x,y){
        var options={
            density:30,
            friction:1.0,
            restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=200;
        this.height=80;
        World.add(world,this.body);
    }
    display(){
        var Ironpos=this.body.position;
        //pos.x=mouseX;
        //pos.y=mouseY;
        var angle=this.body.angle;
        push()
        translate(Ironpos.x,Ironpos.y);
        rotate(angle)
        strokeWeight(3)
        stroke("purpke")
        fill("black")
        rectMode(CENTER)
        rect(0,0,this.width,this,this.height);
        pop()
    }
}