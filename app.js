// Bài1
// let div = document.getElementById("exercise")
// let btn = document.getElementById("btn")
// btn.onclick=function() {
//     if(div.style.display !== "none"){
//         div.style.display ="none"
//     }else{
//         div.style.display ="block"
//     }
// }

// Bai 2:

// let btn = document.getElementById("btn");
// let div = document.getElementById("exercise");
// btn.onclick=function(){
//     let r =Math.floor( Math.random()*256);//0-255
//     let g =Math.floor( Math.random()*256);//0-255
//     let b =Math.floor( Math.random()*256);//0-255
//     let color = `rgb(${r}, ${g}, ${b})`;
//     div.style.backgroundColor=color;
    
// };

// bài 3

// btn.onclick = function (){
//         temp = ""
//         console.log(div1.innerText);
//         console.log(div2.innerText);
//         temp = div1.innerText
//         div1.innerText = div2.innerText
//         div2.innerText = temp
//     }


// Bai 4

let btn =document.getElementById("btn")
let div = document.getElementById("exercise")

div.style.fontSize="14px";
btn.onclick=function(){
    let fontSize = Number(div.style.fontSize.replace("px", ""));
    fontSize = fontSize +1;
    div.style.fontSize = fontSize+"px"
};
    


