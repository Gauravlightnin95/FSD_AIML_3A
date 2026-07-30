const arr=[1,2,3,4,5,6,7,8,9]
const a=arr.filter((x)=>(x%2==0))
console.log("Even Numbers",a)
const b=a.map((x)=>(x*x))
console.log("Squares=",b)
const c=b.reduce((x,s)=>(x+s))
console.log("Single",c)