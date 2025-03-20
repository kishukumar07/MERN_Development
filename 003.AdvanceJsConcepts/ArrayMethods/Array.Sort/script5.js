// Sorting with map

// the array to be sorted
const data = ["delta", "alpha", "charlie", "bravo"];

// temporary array holds objects with position and sort-value
const mapped = data.map((v, i) => {
  return { i, value: someSlowOperation(v) };
});

function someSlowOperation(v){
    
        for( let i=0 ; i<=v; i++){
            
        }
        return v;
}



console.log(mapped); 


// sorting the mapped array containing the reduced values
mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

console.log(mapped)



const result = mapped.map((el) => data[el.i]); //reducing the mapped value   (data is declared array )

console.log(result)