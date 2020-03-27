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

class Triangle extends Polygon {
  get isValid() {
    if(this.countSides == 3) {
      return true
    } else {
      return false
    }
  }
}

let tri = new Triangle([2,3,3,4])
console.log(tri.isValid)