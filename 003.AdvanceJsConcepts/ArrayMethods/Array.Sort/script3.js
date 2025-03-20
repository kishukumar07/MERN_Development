/* 
Sorting array of objects
Arrays of objects can be sorted by comparing the value of one of their properties.
~js 

*/


const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
  // sort by field's vaue of objects inside an array 
  items.sort((a, b) => a.value - b.value);  //ascending 

  console.log(items)






  // sort by name
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1; 
    } 
    if (nameA > nameB) {
      return 1; 
    }
  
    // names must be equal
    return 0;
  });

  console.log(items)   //ascending name sorting 