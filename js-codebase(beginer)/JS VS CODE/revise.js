// Creat an object with the following functionality . 
// //ability to add   3 students details and their marks in 3 subject

let obj={


arr : [], 
    add : function (name , eng ,math , sst){
        
        let objx={}; 
        objx.name=name;
        objx.eng=eng; 
        objx.math=math; 
        objx.sst=sst; 

        this.arr.push(objx);

    },

  m : function(){
        let min =Infinity; 

        let min_stu=""; 
        let i; 
        for(i=0; i<=this.arr.length-1; i++)
        {
          let total =this.arr[i].eng+this.arr[i].math +this.arr[i].sst; 
            if(total<min){
                min=total;  
                min_stu =(this.arr[i].name); 
            }

         
        }
        console.log("min student: ", min_stu); 
  }



}


obj.add("niket", 22,44,55); 
obj.add("shivam", 24,46,78); 
obj.add("nikei", 22,44,53); 
console.log(obj.arr);

obj.m(); 