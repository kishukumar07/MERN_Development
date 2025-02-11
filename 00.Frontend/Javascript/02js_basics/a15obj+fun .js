//iw. Creat an object with the following functionality . 
//ability to add   3 students details and their marks in 3 subject



let details = {
    arr: [],

    store: function (name, eng, math, sci) {
        let obj = {};

        obj.name = name;
        obj.eng = eng;
        obj.math = math;
        obj.sci = sci;
        this.arr.push(obj);
    },

    min_studen: function () {
        let total = 0;
        let minx;
        let i;
        for (i = 0; i < this.arr.length; i++) {
            total = this.arr[i].eng + this.arr[i].math + this.arr[i].sci;
            let min = Infinity;
            if (min > total) {
                min = total;
                minx = this.arr[i].name;
            }

        }
        console.log(minx);
    },



    maxo: function () {
        let j, sumeach = 0;
        let topstudent;
        let maxmarks = - Infinity;
        for (j = 0; j <= this.arr.length - 1; j++) {
            sumeach = this.arr[j].eng + this.arr[j].math + this.arr[j].sci;


            if (sumeach > maxmarks) {
                maxmarks = sumeach;
                topstudent = this.arr[j].name;

            }


        }
        console.log(topstudent);


    },
};


details.store("niket", 4, 54, 64);
details.store("nis", 3, 5, 64);
details.store("radhika", 3, 4, 64);


console.log(details.arr);
details.min_studen();
details.maxo(); 