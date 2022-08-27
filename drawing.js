 window.addEventListener("load",()=>{
    let canvas=document.querySelector("#draw");
    let ctx=canvas.getContext('2d');

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    let painting=false;
    function startposition(e){
        painting=true;
        draw(e);
    }
   
    
    function finishposition(){
        painting=false;
        ctx.beginPath();
    }
    function draw(e){
        if(!painting) return;
        ctx.lineWidth=5;
        ctx.lineCap="round";
  ctx.strokeStyle="blue";
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX,e.clientY);
    }
    //Eventlistener
    window.addEventListener("mousedown",startposition);
    window.addEventListener("mouseup",finishposition);
    window.addEventListener("mousemove",draw);
 });
 