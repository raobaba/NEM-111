let crypto=require('crypto')
let t=process.argv.slice(2)
t= t.map((el,i)=>{
  if(i!==0){
    el=Number(el)
  }
  return el
})
let key=t[0]
if(key==="add"){
console.log(t[1]+t[2])
}
if(key==="sub"){
console.log(t[1]-t[2])
}
if(key==="mult"){
console.log(t[1]*t[2])
}
if(key==="divide"){
console.log(t[1]/t[2])
}
if(key==="sin"){
console.log(Math.sin(t[1]))
}
if(key==="cos"){
    console.log(Math.cos(t[1]))
}
if(key==="tan"){
    console.log(Math.tan(t[1]))
}
if(key==="random"){
if(t.length>2){
    console.log(crypto.randomInt(t[1],t[2]))
}else{
    console.log(crypto.randomInt(t[1]))
}
}
