class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.ground=Bodies.rectangle(x,y,width,height,options);
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
      World.add(world, this.ground);
    }
    display(){
      noStroke();
      rectMode(CENTER);
      fill("white");
      rect(this.ground.position.x,this.ground.position.y,900,20);
    }
  };
