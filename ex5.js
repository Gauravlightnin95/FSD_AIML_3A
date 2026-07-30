function sum(...x){
    const ans=x.reduce((x,y)=>(x+y))
    return ans
}
console.log(sum(1,2))
console.log(sum(2,3,4))
console.log(sum(2,3,4,5))