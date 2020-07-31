class Ground{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,800,350,options);
        this.width = 800;
        this.height = 350;
        this.image = loadImage("images/ground.jpg")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        //fill(200)
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}