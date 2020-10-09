class Paper {
    constructor(x, y,r) {
      var options = {
        'density':1.0,
        'friction': 1.5,
        'restitution':0.5,isStatic : false

      };
      this.body = Bodies.circle(x, y,r/2, options);
     this.r = r
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipse (0,0,this.r,this.r)
      
      pop();
    };
  };
  