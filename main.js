let a=document.querySelector(".add");
a.onclick=function(e){
  //console.log(e.target);
 
let ele=document.querySelector(".g").value;
let res=`<li class="li_ja">
<input type="checkbox" onchange="updateTask(this)">
        <span >${ele}</span>


</li>`
document.querySelector(".list").innerHTML+=res;
// let a2=document.querySelector(".list");
// a2.onclick=function(e){
//    // console.log(box);
//    // a2.classList.toggle("list2");
//    a2.lastChild.classList.toggle("list2");
//}
}



function updateTask(checkbox) 
{
   const taskText = checkbox.nextElementSibling;
   taskText.style.textDecoration = checkbox.checked ? "line-through" : "none";
}

