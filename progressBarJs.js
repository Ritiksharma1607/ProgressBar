console.log("hello");

let nxt=document.getElementById('next');
let prev=document.getElementById('prev');
let fin=document.getElementById('fin');
let items=[...document.querySelectorAll('.item')];
const Max_step=4;
let curr_step=1;

nxt.addEventListener("click",function() {

   
    if(curr_step<Max_step){
    const currItem=items[curr_step-1];
    currItem.classList.add('completed');
    curr_step++;
    prev.disabled=false;
  


}

    if(curr_step===Max_step){
      nxt.disabled=true;
      fin.disabled=false;
    }
    
});

prev.addEventListener("click",function() {
    let prevbtn=items[curr_step-2];
    
    prevbtn.classList.remove('completed');
   curr_step--;
    nxt.disabled=false;
    fin.disabled=true;
    console.log(curr_step);
              

    
    if(curr_step===1){
        prev.disabled=true;
    }
  
});

fin.addEventListener("click",function(){
      location.reload();
});