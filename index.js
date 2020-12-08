class Circle{
    constructor(raidus){
        this.radius = radius
    }

    get diameter(){
        return diameter * this.radius
    }
    get circumference(){
        return  this.diameter * Math.PI
    } 
    get area(){
        Math.PI * (this.radius * this.raidus)
    }
    set diameter(value){
     value * this.radius
    } 
    set circumference(value){
        [this.diameter * Math.PI] = value 
    }
}