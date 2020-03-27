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
    if (this.countSides == 3) {
      if((this.sides[0]+this.sides[1] > this.sides[2]) && (this.sides[1]+this.sides[2] > this.sides[0]) && (this.sides[0]+this.sides[2] > this.sides[1])){
        return true
        } else {
        return false
        }
    } else {
      return false
    }
  }
}

