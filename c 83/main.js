canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


color="blue";
width_of_line=6;


var mouseEvent="empty";
var last_position_of_x,last_position_of_y;


canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
    console.log("mouseleave");

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup" ;
    console.log("mouseup");
}
color=document.getElementById("dog1").value;

canvas.addEventListener("mousedown",my_mousdown);
function my_mousdown(e){
    mouseEvent="mousedown" ;
    console.log("mousedown");
    color=document.getElementById("dog1").value;
    width_of_line=document.getElementById("dog2").value;
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_position_of_x=e.clientX-canvas.offsetLeft;
current_position_of_y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_position_of_x,current_position_of_y);
ctx.stroke();
}
last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;


}


function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}




//codes for touch  events//
var width=screen.width
var new_canvas_width=screen.width-70;
var new_canvas_height=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").height=new_canvas_height;
    document.getElementById("myCanvas").width=new_canvas_width;

}
canvas.addEventListener("touchstart",my_touchstart);
function  my_touchstart(e){
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;

}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
ctx.strokeStyle="pink";
ctx.lineWidth=10;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_position_of_x,current_position_of_y);
ctx.stroke();
last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;
}
