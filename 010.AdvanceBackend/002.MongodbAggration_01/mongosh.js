// INSERTED THE DATA SET TO COLLECTION     -------Practical of mongodb aggrigation operator  

mongoAggregation > db.orders.insertMany([
  ...  { _id: 0, name: "Pepperoni", size: "small", price: 19, quantity: 10, date: ISODate("2021-03-13T08:14:30Z") },
  ... { _id: 1, name: "Pepperoni", size: "medium", price: 20, quantity: 20, date: ISODate("2021-03-13T09:13:24Z") },
  ...  { _id: 2, name: "Pepperoni", size: "large", price: 21, quantity: 30, date: ISODate("2021-03-17T09:22:12Z") },
  ...   { _id: 3, name: "Cheese", size: "small", price: 12, quantity: 15, date: ISODate("2021-03-13T11:21:39.736Z") },
  ...  { _id: 4, name: "Cheese", size: "medium", price: 13, quantity: 50, date: ISODate("2022-01-12T21:23:13.331Z") },
  ...  { _id: 5, name: "Cheese", size: "large", price: 14, quantity: 10, date: ISODate("2022-01-12T05:08:13Z") },

  ...   { _id: 6, name: "Vegan", size: "small", price: 17, quantity: 10, date: ISODate("2021-01-13T05:08:13Z") },
  ...     { _id: 7, name: "Vegan", size: "medium", price: 18, quantity: 10, date: ISODate("2021-01-13T05:10:13Z") }
 ]),
{
  acknowledged: true,
    insertedIds : { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7 }
}




//jUST GOING TO THE DATA   SO WE CAN FAMILIER WITH IT  by going different field here ....
mongoAggregation > db.orders.find()    
[
  {
    _id: 0,
    name: 'Pepperoni',
    size: 'small',
    price: 19,
    quantity: 10,
    date: ISODate('2021-03-13T08:14:30.000Z')
  },
  {
    _id: 1,
    name: 'Pepperoni',
    size: 'medium',
    price: 20,
    quantity: 20,
    date: ISODate('2021-03-13T09:13:24.000Z')
  },
  {
    _id: 2,
    name: 'Pepperoni',
    size: 'large',
    price: 21,
    quantity: 30,
    date: ISODate('2021-03-17T09:22:12.000Z')
  },
  {
    _id: 3,
    name: 'Cheese',
    size: 'small',
    price: 12,
    quantity: 15,
    date: ISODate('2021-03-13T11:21:39.736Z')
  },
  {
    _id: 4,
    name: 'Cheese',
    size: 'medium',
    price: 13,
    quantity: 50,
    date: ISODate('2022-01-12T21:23:13.331Z')
  },
  {
    _id: 5,
    name: 'Cheese',
    size: 'large',
    price: 14,
    quantity: 10,
    date: ISODate('2022-01-12T05:08:13.000Z')
  },
  {
    _id: 6,
    name: 'Vegan',
    size: 'small',
    price: 17,
    quantity: 10,
    date: ISODate('2021-01-13T05:08:13.000Z')
  },
  {
    _id: 7,
    name: 'Vegan',
    size: 'medium',
    price: 18,
    quantity: 10,
    date: ISODate('2021-01-13T05:10:13.000Z')
  }

]



//THE SAME THING WITH AGGRIGATION-( FETCHING ALL DOCUMENTS OF THE COLLECTION )
mongoAggregation> db.orders.aggregate([])    //REMEMBER  THE SYNTEX ??.... 
[
  {
    _id: 0,
    name: 'Pepperoni',
    size: 'small',
    price: 19,
    quantity: 10,
    date: ISODate('2021-03-13T08:14:30.000Z')
  },
  {
    _id: 1,
    name: 'Pepperoni',
    size: 'medium',
    price: 20,
    quantity: 20,
    date: ISODate('2021-03-13T09:13:24.000Z')
  },
  {
    _id: 2,
    name: 'Pepperoni',
    size: 'large',
    price: 21,
    quantity: 30,
    date: ISODate('2021-03-17T09:22:12.000Z')
  },
  {
    _id: 3,
    name: 'Cheese',
    size: 'small',
    price: 12,
    quantity: 15,
    date: ISODate('2021-03-13T11:21:39.736Z')
  },
  {
    _id: 4,
    name: 'Cheese',
    size: 'medium',
    price: 13,
    quantity: 50,
    date: ISODate('2022-01-12T21:23:13.331Z')
  },
  {
    _id: 5,
    name: 'Cheese',
    size: 'large',
    price: 14,
    quantity: 10,
    date: ISODate('2022-01-12T05:08:13.000Z')
  },
  {
    _id: 6,
    name: 'Vegan',
    size: 'small',
    price: 17,
    quantity: 10,
    date: ISODate('2021-01-13T05:08:13.000Z')
  },
  {
    _id: 7,
    name: 'Vegan',
    size: 'medium',
    price: 18,
    quantity: 10,
    date: ISODate('2021-01-13T05:10:13.000Z')
  }
]  //we just written db.orders.aggregate([]) and an empty array 


//Pagination 
mongoAggregation> db.orders.find().limit(2)
[
  {
    _id: 0,
    name: 'Pepperoni',
    size: 'small',
    price: 19,
    quantity: 10,
    date: ISODate('2021-03-13T08:14:30.000Z')
  },
  {
    _id: 1,
    name: 'Pepperoni',
    size: 'medium',
    price: 20,
    quantity: 20,
    date: ISODate('2021-03-13T09:13:24.000Z')
  }
]


//we want only 2 documents from top 
mongoAggregation> db.orders.aggregate([{}])
// MongoServerError[Location40323] : A pipeline stage specification object must contain exactly one field.




//pagination with $limit in aggregation    $limit
mongoAggregation> db.orders.aggregate([{$limit:2}])    
[
  {
    _id: 0,
    name: 'Pepperoni',
    size: 'small',
    price: 19,
    quantity: 10,
    date: ISODate('2021-03-13T08:14:30.000Z')
  },
  {
    _id: 1,
    name: 'Pepperoni',
    size: 'medium',
    price: 20,
    quantity: 20,
    date: ISODate('2021-03-13T09:13:24.000Z')
  }
]


//SORTING IN THE BASIS OF A FIELD'S VALUE with general .find().sort({field:-1/1}) 
mongoAggregation> db.orders.find({}).sort({price:-1})
[
  {
    _id: 2,
    name: 'Pepperoni',
    size: 'large',
    price: 21,
    quantity: 30,
    date: ISODate('2021-03-17T09:22:12.000Z')
  },
  {
    _id: 1,
    name: 'Pepperoni',
    size: 'medium',
    price: 20,
    quantity: 20,
    date: ISODate('2021-03-13T09:13:24.000Z')
  },
  {
    _id: 0,
    name: 'Pepperoni',
    size: 'small',
    price: 19,
    quantity: 10,
    date: ISODate('2021-03-13T08:14:30.000Z')
  },
  {
    _id: 7,
    name: 'Vegan',
    size: 'medium',
    price: 18,
    quantity: 10,
    date: ISODate('2021-01-13T05:10:13.000Z')
  },
  {
    _id: 6,
    name: 'Vegan',
    size: 'small',
    price: 17,
    quantity: 10,
    date: ISODate('2021-01-13T05:08:13.000Z')
  },
  {
    _id: 5,
    name: 'Cheese',
    size: 'large',
    price: 14,
    quantity: 10,
    date: ISODate('2022-01-12T05:08:13.000Z')
  },
  {
    _id: 4,
    name: 'Cheese',
    size: 'medium',
    price: 13,
    quantity: 50,
    date: ISODate('2022-01-12T21:23:13.331Z')
  },
  {
    _id: 3,
    name: 'Cheese',
    size: 'small',
    price: 12,
    quantity: 15,
    date: ISODate('2021-03-13T11:21:39.736Z')
  }
]


//Aggrigation operator -$sort....SORTING IN THE BASIS OF A FIELD'S VALUE
mongoAggregation> db.orders.aggregate([{$sort:{"price":-1}}])  //-1(decending)...1(Ascending)
[
  {
    _id: 2,
    name: 'Pepperoni',
    size: 'large',
    price: 21,
    quantity: 30,
    date: ISODate('2021-03-17T09:22:12.000Z')
  },
  {
    _id: 1,
    name: 'Pepperoni',
    size: 'medium',
    price: 20,
    quantity: 20,
    date: ISODate('2021-03-13T09:13:24.000Z')
  },
  {
    _id: 0,
    name: 'Pepperoni',
    size: 'small',
    price: 19,
    quantity: 10,
    date: ISODate('2021-03-13T08:14:30.000Z')
  },
  {
    _id: 7,
    name: 'Vegan',
    size: 'medium',
    price: 18,
    quantity: 10,
    date: ISODate('2021-01-13T05:10:13.000Z')
  },
  {
    _id: 6,
    name: 'Vegan',
    size: 'small',
    price: 17,
    quantity: 10,
    date: ISODate('2021-01-13T05:08:13.000Z')
  },
  {
    _id: 5,
    name: 'Cheese',
    size: 'large',
    price: 14,
    quantity: 10,
    date: ISODate('2022-01-12T05:08:13.000Z')
  },
  {
    _id: 4,
    name: 'Cheese',
    size: 'medium',
    price: 13,
    quantity: 50,
    date: ISODate('2022-01-12T21:23:13.331Z')
  },
  {
    _id: 3,
    name: 'Cheese',
    size: 'small',
    price: 12,
    quantity: 15,
    date: ISODate('2021-03-13T11:21:39.736Z')
  }
]






//Both limit and sort together with .sort() and .limit()
mongoAggregation>  db.orders.find({}).limit(3).sort({_id:-1})
[
  {
    _id: 7,
    name: 'Vegan',
    size: 'medium',
    price: 18,
    quantity: 10,
    date: ISODate('2021-01-13T05:10:13.000Z')
  },
  {
    _id: 6,
    name: 'Vegan',
    size: 'small',
    price: 17,
    quantity: 10,
    date: ISODate('2021-01-13T05:08:13.000Z')
  },
  {
    _id: 5,
    name: 'Cheese',
    size: 'large',
    price: 14,
    quantity: 10,
    date: ISODate('2022-01-12T05:08:13.000Z')
  }
]

//order of stages changed  with .find()  does it matters ---nope 
mongoAggregation> db.orders.find({}).sort({_id:-1}).limit(3)
[
  {
    _id: 7,
    name: 'Vegan',
    size: 'medium',
    price: 18,
    quantity: 10,
    date: ISODate('2021-01-13T05:10:13.000Z')
  },
  {
    _id: 6,
    name: 'Vegan',
    size: 'small',
    price: 17,
    quantity: 10,
    date: ISODate('2021-01-13T05:08:13.000Z')
  },
  {
    _id: 5,
    name: 'Cheese',
    size: 'large',
    price: 14,
    quantity: 10,
    date: ISODate('2022-01-12T05:08:13.000Z')
  }
]




//Both limit and sort together with aggregation operators $limit and $sort
mongoAggregation> db.orders.aggregate([{$limit:3},{$sort:{_id:-1}}])
[
  {
    _id: 2,
    name: 'Pepperoni',
    size: 'large',
    price: 21,
    quantity: 30,
    date: ISODate('2021-03-17T09:22:12.000Z')
  },
  {
    _id: 1,
    name: 'Pepperoni',
    size: 'medium',
    price: 20,
    quantity: 20,
    date: ISODate('2021-03-13T09:13:24.000Z')
  },
  {
    _id: 0,
    name: 'Pepperoni',
    size: 'small',
    price: 19,
    quantity: 10,
    date: ISODate('2021-03-13T08:14:30.000Z')
  }
]


//Order changed first stage $sort and then 2nd stage $limit  _-Does order matter ? yes 
mongoAggregation> db.orders.aggregate([{$sort:{_id:-1}},{$limit:3}])
[
  {
    _id: 7,
    name: 'Vegan',
    size: 'medium',
    price: 18,
    quantity: 10,
    date: ISODate('2021-01-13T05:10:13.000Z')
  },
  {
    _id: 6,
    name: 'Vegan',
    size: 'small',
    price: 17,
    quantity: 10,
    date: ISODate('2021-01-13T05:08:13.000Z')
  },
  {
    _id: 5,
    name: 'Cheese',
    size: 'large',
    price: 14,
    quantity: 10,
    date: ISODate('2022-01-12T05:08:13.000Z')
  }
]//order of stages matters with  aggregation 











//filtering only those where price is 17  .find()
mongoAggregation> db.orders.find({price:17})
[
  {
    _id: 6,
    name: 'Vegan',
    size: 'small',
    price: 17,
    quantity: 10,
    date: ISODate('2021-01-13T05:08:13.000Z')
  }
]



//getting error? 
mongoAggregation> db.orders.aggregate([{price:17}])
// MongoServerError[Location40324]: Unrecognized pipeline stage name: 'price'



//samething with $match aggregation 

mongoAggregation> db.orders.aggregate([{$match:{price:17}} ])
[
  {
    _id: 6,
    name: 'Vegan',
    size: 'small',
    price: 17,
    quantity: 10,
    date: ISODate('2021-01-13T05:08:13.000Z')
  }
]



//if there is 2nd stage 
mongoAggregation> db.orders.aggregate([{$match:{price:14}},{$match:{size:"large"}}])   //like ...db.orders.find({field1:value1},{field2:value2}})
[
  {
    _id: 5,
    name: 'Cheese',
    size: 'large',
    price: 14,
    quantity: 10,
    date: ISODate('2022-01-12T05:08:13.000Z')
  }
]



//finding pizzas of medium size whose price is lte 20
mongoAggregation> db.orders.aggregate([{$match:{size:"medium"}} ,{ $match:{price:{$lte:20} }} ])
[
  {
    _id: 1,
    name: 'Pepperoni',
    size: 'medium',
    price: 20,
    quantity: 20,
    date: ISODate('2021-03-13T09:13:24.000Z')
  },
  {
    _id: 4,
    name: 'Cheese',
    size: 'medium',
    price: 13,
    quantity: 50,
    date: ISODate('2022-01-12T21:23:13.331Z')
  },
  {
    _id: 7,
    name: 'Vegan',
    size: 'medium',
    price: 18,
    quantity: 10,
    date: ISODate('2021-01-13T05:10:13.000Z')
  }
]





// can combine both in one as well
mongoAggregation> db.orders.aggregate([{$match:{size:"medium"}} ,{$match:{price:{$lt:20}}}])
// OR
mongoAggregation> db.orders.aggregate([{$match:{size:"medium",price:{$lt:20}}}]) //no need to use two $match mongo aggregation Operator 




[
  {
    _id: 4,
    name: 'Cheese',
    size: 'medium',
    price: 13,
    quantity: 50,
    date: ISODate('2022-01-12T21:23:13.331Z')
  },
  {
    _id: 7,
    name: 'Vegan',
    size: 'medium',
    price: 18,
    quantity: 10,
    date: ISODate('2021-01-13T05:10:13.000Z')
  }
]