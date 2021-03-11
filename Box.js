class Box{
    constructor(x,y,width,height){
        var opts = {
            restitution: 0.8

        };
        this.body = Bodies.rectangle(x,y,width,height,opts);
        MWorld.add(myWorld,this.body);
        this.width = width ;
        this.height = height ;

    }
    display(){
        var position = this.body.position
        rectMode(CENTER);
        rect(position.x,position.y,this.width,this.height);
    }
}