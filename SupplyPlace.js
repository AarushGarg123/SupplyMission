class Supply{
    constructor(x,y,width,height){
        var place= {
            restitution:0
        }
        this.body=Bodies.rectangle(x,y,width,height,place);

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(BOTTOM);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
    }
};