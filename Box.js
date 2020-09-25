class Box{
  constructor(x, y, width, height) {
    var options = {
     /* 'restitution':0.3,
      'friction':0.8,
      'density':0.2,*/
      'isStatic' : false
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("Rectangle.png")   
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    imageMode(CENTER);
    //strokeWeight(4);
    //stroke("Yellow");
    fill(255);
    image(this.image, 0, 0, this.width, this.height);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
   /* if(this.body.speed < 5){
      //
    }
    else{
      World.remove(world, this.body);
      tint(255, this.Visibility);
      Image()
    }*/
  }
  };
  