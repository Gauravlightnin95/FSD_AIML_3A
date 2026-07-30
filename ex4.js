const student={
    name: "Gaurav",
    age: 21,
    branch: "AIML"
}
// const name=student.name
// const age=student.age
// const branch=student.branch
const {name,age,branch}=student;
console.log("Name ",name)
console.log("Age ",age)
console.log("Branch ",branch)
const num=[11,22,33]
console.log(num[0]+num[1]+num[2])
const [a,b,c]=num;// Square brackets for structure destructuring like on arrays and curly brackets for objects