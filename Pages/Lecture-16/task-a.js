let student = {
    "Name": "Hehe",
    "Cgpa": 9.2,
    "Courses": [
      {
        "bookname": "Math",
        "publisher": [
            "Pearson",
            "Physics",
            "TMH"
    ]
      },
      {
        "bookname": "Physics",
        "publisher": [
            "Pearson",
            "Physics",
            "TMH"
    ]
      },
      {
        "bookname": "Chemistry",
        "publisher": [
                "Pearson",
                "Physics",
                "TMH"
        ]   
    }
    ]
}

let para = document.getElementById("data");

for(let i=0;i<student.Courses.length;i++){
    para.innerHTML += `<h1>${student.Courses[i].bookname}</h1>`;
    for(let j=0;j<student.Courses[i].publisher.length;j++){
        para.innerHTML += `<h3>${student.Courses[i].publisher[j]}</h3>\n`
    }
}



  
