class Paper
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
            restitution: 0.5,
            friction:0,
            density:1.5	
			}
		this.image = loadImage("paper.png");
        this.radius = radius
		this.body=Bodies.circle(x, y, radius/2,options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x,pos.y);
            rotate(this.body.angle);
			ellipseMode(RADIUS);
			imageMode(CENTER)
			image(this.image,0,0,this.radius,this.radius);
			pop()
			
	}

}
