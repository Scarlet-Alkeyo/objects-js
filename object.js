const people =[
        {name:'Alice',age:17},
        {name:'Eunice',age:22},
        {name:'Charlie',age:14},
        {name:'Max',age:19},
    ];

 const Adult= people.filter(item=>{
    return(item.age>=18)
}) 

console.log({Adult})


// Write a function that takes in an array of objects where each object represent  a product name,price,and category property.The  function
// return an object that groups the product by their categories,with the category
// /names as keys and arrays of products as values.
const products=[
    {name:'laptop',price:1200}, 
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },  

];
function groupCategory(products) {
  return products.reduce((acc, product) => {
     const { category } = product;
     if (!acc[category]) {
       acc[category] = [];
     }
     acc[category].push(product);
     return acc;
  }, {});
 }
 


// 3.Given an array of objects, where each object represents a student with a name and an array of scores,
//  write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85.
 const students = [
  { name: 'John', scores: [90, 80, 85] },
  { name: 'Jane', scores: [95, 92, 88] },
  { name: 'Jim', scores: [70, 80, 75] },
  { name: 'Jill', scores: [85, 90, 84] },
];
function Average(students) {
  return students.filter(student => {
     const averageScore = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
     return averageScore >= 85;
  }).map(student => student.name);
 }
 const AverageStudents = Average(students);
 console.log(AverageStudents);


// 4.Given an object representing a car, with properties for the make, model, year,
//  and a method to display the car's information, write a function that takes the car object and adds a new method to the object called age.
//  The age method should return 
// the current age of the car based on the current year and the car's year property. 
const car = {
  make: 'Toyota',
  model: 'prado',
  year: 2003,
  age:function() {
    let  currentYear = new Date().getFullYear();
     let carAge= currentYear - car.year;
     return carAge
   }
   };
   console.log(car.age());
 





