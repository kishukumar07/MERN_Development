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