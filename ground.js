class Ground{
    constructor(x,y,width,height){
        var opts = {
            isStatic: true

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