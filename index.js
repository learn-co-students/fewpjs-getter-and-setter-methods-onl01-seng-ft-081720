// Add your Circle class here

class Circle{
    constructor (radius) {
        this.radius = radius
    }

    get diameter() {
        return (this.radius * 2)
    }

    set diameter(dia) {
        this.radius = (dia / 2)
    }

    get circumference() {
        return (this.diameter * Math.PI)
    }

    set circumference(cir) {
        this.radius = (cir / Math.PI) / 2
    }

    get area() {
        return (Math.PI * this.radius ** 2)
    }

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI)
    }
    
}