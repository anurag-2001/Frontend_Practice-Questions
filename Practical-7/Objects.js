//Question 1

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

console.log(Object.keys(student));

//Question 2

console.log(student)

delete student.rollno;

console.log(student)

//Question 3

const propOwn = Object.getOwnPropertyNames(student);
console.log(propOwn.length);

//Question 4

var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
];

library.forEach((item)=>{
    console.log(item.title+" "+item.author+" "+item.readingStatus);
})

//Question 5

function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
  }
  
  Cylinder.prototype.Volume = function () {
    var radius = this.cyl_diameter / 2;
    return this.cyl_height * Math.PI * radius * radius;
  };
  
  var cyl = new Cylinder(7, 4);
  // Volume of the cylinder with four decimal places.
  console.log('volume =', cyl.Volume().toFixed(4));



//Question 6

var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
      { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
       { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

var sortedLibrary=[]
library.forEach((item)=>{
   newItem=Object.keys(item).sort((a,b)=>{
        if(a<b){
            return -1
        }
        else{
            return 1
        }
    })

   newObj={}
   let a
   newItem.forEach((i,index)=>{
       a=i
       newObj[a]=item[a]
   })
   sortedLibrary.push(newObj)
})


console.log(sortedLibrary.sort((a,b)=>{
       if(a.title<b.title)
       return -1
       if(a.title>b.title)
       return 1
    return 0
}))