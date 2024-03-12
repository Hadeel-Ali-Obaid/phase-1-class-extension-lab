// Your code here
class Polygon {
  constructor(Array) {
    this.Array = Array;
  }
  get countSides() {
    return this.Array.length;
  }
  get perimeter() {
    let sum = 0;
    for (let i = 0; i < this.Array.length; i++) {
      sum = sum + this.Array[i];
    }
    return sum;
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (
      this.Array[0] + this.Array[1] > this.Array[1] &&
      this.Array[0] + this.Array[2] > this.Array[2] &&
      this.Array[1] + this.Array[2] > this.Array[0]
    ) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (
      this.Array[0] == this.Array[1] &&
      this.Array[0] == this.Array[2] &&
      this.Array[0] == this.Array[3]
    ) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return this.Array[0] * this.Array[0];
  }
}
