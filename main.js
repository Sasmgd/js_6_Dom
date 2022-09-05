//1
let body=document.querySelector("body");
const div1=document.createElement('div');
body.appendChild(div1);
div1.classList.add("box");
//2
const h1=document.createElement("h1");
const p=document.createElement("p");
div1.appendChild(h1);
div1.appendChild(p);
h1.setAttribute("id","title");
p.classList.add("text");
//3
h1.innerHTML="ვენეცია";
p.innerHTML="ვენეცია ვენეტოს რეგიონის დედაქალია. სახელი მომდინარეობს აქ მაცხოვრებელი ანტიკური პერიოდის ხალხისგან, რომლებსაც ვენეტები ეწოდებოდათ."
//4
h1.classList.add("title");
p.style.fontSize="25px";
p.style.color="brown";
//5
let circle=document.createElement("div");
div1.appendChild(circle);
circle.classList.add("circle");
circle.style.width="100px"
circle.style.height="100px";
circle.style.backgroundColor="yellow";
circle.style.marginTop="50px";
circle.style.borderRadius="50%"
//6
circle.addEventListener("mouseover",function(){
    circle.style.backgroundColor="blue";
})
//7
let btn=document.createElement('button');
div1.appendChild(btn);
btn.classList.add("btn");
btn.innerHTML="DELETE DIV"
btn.addEventListener('click',function(){
    div1.remove();
})
let btn1=document.createElement('button');
btn1.classList.add('btn1');
body.appendChild(btn1);
btn1.innerHTML="CHANGE"
let divs=document.createElement('div');
body.appendChild(divs);
btn1.addEventListener('click',function(){
    divs.classList.toggle(
        'divs'
    )
})
let satauri=document.createElement('h2');

