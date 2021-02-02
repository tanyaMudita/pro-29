class Box{

    constructor(x,y){

        var options={
             'friction':1.0,
             'density':0.8
          }
         
          this.body=Bodies.rectangle(x,y,30,40,options);
          this.width=30;
          this.height=40;


          World.add(world,this.body); 
          

    }

    display(){
        
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(235,27,65);
        rect(0,0,this.width,this.height);
        pop();

    }


}