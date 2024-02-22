let parent=document.querySelector("#p1");

parent.addEventListener('click',function(){
    console.log("Parent is invoked");
});

let child = document.querySelector("#c1");

child.addEventListener("click",function(){
    console.log("child is invoked");
});