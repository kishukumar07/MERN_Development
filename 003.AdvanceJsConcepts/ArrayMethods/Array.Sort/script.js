//Defination :  The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted..
// The toSorted() method of Array instances is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"] //a...z



const array1 = [1, 30, 4, 21, 100000];
array1.sort();  //this works by comparing only first place of the elements ? leads to unwanted results ... 
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]




/* 
Syntax-js
 A.   sort()          

 B.    sort(compareFn)
                      ~A function that determines the order of the elements. the function is called with the following arguments   
                             (a,b)=>{         }
                      a ~ the first element for comparison . will never be undefined . 
                      
                      b~ the second element for comparision. will never be undefined. 

        what the callback as a param returns ? 
                 
               It should return a number where:
                         *A negative value indicates that a should come   before b.  
                                 ~remember that (a, b) => a - b sorts numbers in ascending order 
                         *A positive value indicates that a should come     
                         after b.
                                ~remember that (a, b) => b - a sorts numbers in descending order


                         *Zero or NaN indicates that a and b are considered equal.

                         */
/* Return value ~sort method 
                         The reference to the original array, now sorted. Note that the array is sorted in place, and no copy is made.
   */                         



/*  
    Oky so what is the diff b/w both syntax if compareFn is supplied as param or  if not supplied as param ??    
 

    **If compareFn is not supplied
                                      ~ all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All undefined elements are sorted to the end of the array.
                         summary --> sorting happens based on only first place character .  if undefined will be sorted  at the end of the array ...  
    
    
    
        **If compareFn is  supplied
                                      ~ all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All undefined elements are sorted to the end of the array.
                         summary --> sorting happens based on only first place character .  if undefined will be sorted  at the end of the array ...  
*/


