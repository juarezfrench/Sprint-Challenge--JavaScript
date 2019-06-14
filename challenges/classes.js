// 1. Copy and paste your prototype in here and refactor into class syntax.

class Cuboid {
constructor  (cuboidAttr) {
    this.length = cuboidAttr.length;
    this.width = cuboidAttr.width;
    this.height = cuboidAttr.height;
           
      }
      volume() {
        let calcVol = this.length  * this.width * this.height;
        return `The volume of this cuboid is ${calcVol}`; 
      }

      surfaceArea() {
          let calcSurf =  2 * this.length * this.length * this.height * this.height;
        return `The surface area of this cuboid is ${calcSurf}`;        

    }
}
  
let cuboid =  new Cuboid({length: 4, width: 5, height:5})



console.log(cuboid)

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.