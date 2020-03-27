class Polygon {
  constructor(array){
    this.sides = array
  }
  
  get countSides() {
    return this.sides.length
  }
  
  get perimeter() {
    let sum = 0
    this.sides.forEach(side => sum += side)
    return sum
  }
}