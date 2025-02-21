db.instructor.insertMany([  //instructors collection 
     {
      "name": "Pulkit",
      "email": "pulkit@techschool.com"
    },
    {
      "name": "Yogesh",
      "email": "yogesh@techschool.com"
    },
    {
      "name": "Akshay",
      "email": "akshay@techschool.com"
    },
    {
      "name": "Nihal",
      "email": "nihal@techschool.com"
    }
  ])



    mongoAggregation> db.lectures.aggregate([])  //lectures collection 
[
  {
    _id: ObjectId('67b87945d7630cda61cb0cee'),
    name: 'Intro to MongoDB',
    lecture: 'nxm201',
    I_email: 'pulkit@techschool.com'
  },
  {
    _id: ObjectId('67b87945d7630cda61cb0cef'),
    name: 'Intro to AWS',
    lecture: 'nxm301',
    I_email: 'nihal@techschool.com'
  },
  {
    _id: ObjectId('67b87945d7630cda61cb0cf0'),
    name: 'Intro to Recursion',
    lecture: 'dsa301',
    I_email: 'akshay@techschool.com'
  },
  {
    _id: ObjectId('67b87945d7630cda61cb0cf1'),
    name: 'Soft Skills',
    lecture: 'sk101',
    I_email: 'yogesh@techschool.com'
  }
]


//establising relationship with $lookup   instructure <<<->>>lectures
mongoAggregation> db.instructor.aggregate([{$lookup : {from:"lectures" ,localField :"email" ,foreignField:"I_email" ,as:"course" } }])
[
  {
    _id: ObjectId('67b878fcd7630cda61cb0cea'),
    name: 'Pulkit',
    email: 'pulkit@techschool.com',
    course: [
      {
        _id: ObjectId('67b87945d7630cda61cb0cee'),
        name: 'Intro to MongoDB',
        lecture: 'nxm201',
        I_email: 'pulkit@techschool.com'
      }
    ]
  },
  {
    _id: ObjectId('67b878fcd7630cda61cb0ceb'),
    name: 'Yogesh',
    email: 'yogesh@techschool.com',
    course: [
      {
        _id: ObjectId('67b87945d7630cda61cb0cf1'),
        name: 'Soft Skills',
        lecture: 'sk101',
        I_email: 'yogesh@techschool.com'
      }
    ]
  },
  {
    _id: ObjectId('67b878fcd7630cda61cb0cec'),
    name: 'Akshay',
    email: 'akshay@techschool.com',
    course: [
      {
        _id: ObjectId('67b87945d7630cda61cb0cf0'),
        name: 'Intro to Recursion',
        lecture: 'dsa301',
        I_email: 'akshay@techschool.com'
      }
    ]
  },
  {
    _id: ObjectId('67b878fcd7630cda61cb0ced'),
    name: 'Nihal',
    email: 'nihal@techschool.com',
    course: [
      {
        _id: ObjectId('67b87945d7630cda61cb0cef'),
        name: 'Intro to AWS',
        lecture: 'nxm301',
        I_email: 'nihal@techschool.com'
      }
    ]
  }
]






// Create Evaluation collection
db.evaluation.insertMany([
  {
    "student_email": "student1@school.com",
    "course": "nxm201",
    "score": 85
  },
  {
    "student_email": "student2@school.com",
    "course": "nxm301",
    "score": 90
  },
  {
    "student_email": "student3@school.com",
    "course": "dsa301",
    "score": 75
  },
  {
    "student_email": "student4@school.com",
    "course": "sk101",
    "score": 80
  }
])

// Create Student collection
db.student.insertMany([
  {
    "name": "Student One",
    "email": "student1@school.com"
  },
  {
    "name": "Student Two",
    "email": "student2@school.com"
  },
  {
    "name": "Student Three",
    "email": "student3@school.com"
  },
  {
    "name": "Student Four",
    "email": "student4@school.com"
  }
])

// Establish relationship with $lookup
db.student.aggregate([
  {
    $lookup: {
      from: "evaluation",
      localField: "email",
      foreignField: "student_email",
      as: "evaluations"
    }
  }
])

//name and only sessions 
mongoAggregation> db.instructor.aggregate([{$lookup:{from:"lectures", localField:"email" ,foreignField:"I_email" ,as:"course" }},{$project: {email:0 ,_id:0} } ]) //at stage projection at last 

[
  {
    name: 'Pulkit',
    course: [
      {
        _id: ObjectId('67b87945d7630cda61cb0cee'),
        name: 'Intro to MongoDB',
        lecture: 'nxm201',
        I_email: 'pulkit@techschool.com'
      }
    ]
  }
]






// $project can also be used to change field name while projecting like:
mongoAggregation> db.lectures.aggregate([     {$project:{InstructorEmail:"$I_email" ,name:1}}])
[
  {
    _id: ObjectId('67b87945d7630cda61cb0cee'),
    name: 'Intro to MongoDB',
    InstructorEmail: 'pulkit@techschool.com'
  }
]
//only while projecting 




//trying to hide a field in stage 3
mongoAggregation> db.instructor.aggregate([{$lookup:{from:"lectures", localField:"email" ,foreignField:"I_email" ,as:"course" }},{$project: {email:0 ,_id:0} } ,{$project:{"course._id":0}}  ])
[
  {
    name: 'Pulkit',
    course: [
      {
        name: 'Intro to MongoDB',
        lecture: 'nxm201',
        I_email: 'pulkit@techschool.com'
      }
    ]
  }]


//u rememberrrrr??? 
  mongoAggregation> db.datasetOne.aggregate([{$group:{_id:"$state" , totalPop:{$sum:"$pop"}}} ,{$sort:{"totalPop":-1}},{$l
    $limit:3}])
    [
      { _id: 'CA', totalPop: 29754890 },
      { _id: 'NY', totalPop: 17990402 },
      { _id: 'TX', totalPop: 16984601 }
    ]
    

//does anywhere we storing this results.....

//$out-we want to store the results in a collection 

mongoAggregation> db.datasetOne.aggregate([{$group:{_id:"$state" , totalPop:{$sum:"$pop"}}} ,{$sort:{"totalPop":-1}},{$l
  $limit:3} , {$out:top3PopusState} ]) //last stage 

  ==>>
  mongoAggregation> show collections
  datasetOne
  datasetTwo
  instructor
  lectures
  orders
  top3PopuledState
  mongoAggregation> db.top3PopulatedState.aggregate([])
  
  mongoAggregation> db.top3PopuledState.aggregate([])
  [
    { _id: 'CA', totalPop: 29754890 },
    { _id: 'NY', totalPop: 17990402 },
    { _id: 'TX', totalPop: 16984601 }
  ]















