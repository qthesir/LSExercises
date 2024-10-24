// Write the code necesasry to retrieve the value of the courses property of our student obj

let student = {
  name: "Carmen",
  age: 14,
  grade: 10,
  courses: ["biology", "algebra", "composition", "ceramics"],
  gpa: 3.75,
};

coursesProp = student.courses;

console.log(coursesProp);
console.log(student.locker); /// undefined is returned. Very important when looking for errors or other issues with your application
