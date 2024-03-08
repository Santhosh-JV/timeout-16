var h1 = document.createElement("h1");
h1.innerHTML="hello";
document.body.append(h1);

setTimeout(()=>{document.querySelector("h1").innerHTML=`countdown:10`
setTimeout(()=>{document.querySelector("h1").innerHTML=`countdown:9`
setTimeout(()=>{document.querySelector("h1").innerHTML=`countdown:8`
setTimeout(()=>{document.querySelector("h1").innerHTML=`countdown:7`
setTimeout(()=>{document.querySelector("h1").innerHTML=`countdown:6`
setTimeout(()=>{document.querySelector("h1").innerHTML=`countdown:5`
setTimeout(()=>{document.querySelector("h1").innerHTML=`countdown:4`
setTimeout(()=>{document.querySelector("h1").innerHTML=`countdown:3`
setTimeout(()=>{document.querySelector("h1").innerHTML=`countdown:2`
setTimeout(()=>{document.querySelector("h1").innerHTML=`countdown:1`
setInterval(()=>{document.querySelector("h1").innerHTML=`Happy Independence Day !!!`},1000)},1000)},1000)},1000)},1000)},1000)},1000)},1000)},1000)},1000)
},1000);
