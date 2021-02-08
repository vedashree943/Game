var canvas=new fabric.Canvas("myCanvas");
p_x=10;
p_y=10;
block_width=30;
block_height=30;
var po="";
var b_image="";
function pu() {
    fabric.Image.fromURL("player.png",function (Img){
        po=Img;
        po.scaleToWidth(150);
        po.scaleToHeight(140);
        po.set({
            top:p_y, left:p_x

        });
        canvas.add(po);
    });

    
}
function ni(get_image) {
    fabric.Image.fromURL(get_image,function (Img){
        b_image=Img;
        b_image.scaleToWidth(block_width);
        b_image.scaleToHeight(block_height);
        b_image.set({
            top:p_y, left:p_x

        });
        canvas.add(b_image);
    });
    
    
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (e.shiftKey==true && keypressed=='80') {
        console.log("shift and p are pressed together");
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("Current_width").innerHTML=block_width;
        document.getElementById("Current_height").innerHTML=block_height;
        }
        if (e.shiftKey==true && keypressed=='77') {
            console.log("shift and m are pressed together");
            block_height=block_height-10;
            block_width=block_width-10;
            document.getElementById("Current_width").innerHTML=block_width;
            document.getElementById("Current_height").innerHTML=block_height;
            }
    if (keypressed=='38'){
        up();
        
        console.log("up");
    }
    if (keypressed=='40'){
        down();
        console.log("down");
    }
    if (keypressed=='37'){
        left();
        console.log("left");
    }if (keypressed=='39'){
        right();
        console.log("right");
    }
    if (keypressed=='87'){
        ni("wall.jpg");
        console.log("w");
    }
    if (keypressed=='71'){
        ni("ground.png");
        console.log("g");
    }
    if (keypressed=='76'){
        ni("light_green.png");
        console.log("l");
    }
    if (keypressed=='84'){
        ni("trunk.jpg");
        console.log("t");
    }
    if (keypressed=='82'){
        ni(roof.jpg);
        console.log("r");
    }
    if (keypressed=='68'){
        ni("dark_green.png");
        console.log("d");
    }
    if (keypressed=='67'){
        ni("cloud.jpg");
        console.log("c");
    }
    if (keypressed=='89'){
        ni("yellow_wall.png");
        console.log("y");
    }
    if (keypressed=='85'){
        ni("unique.png");
        console.log("u");
    }

}
function up(){
    if (p_y >=0){
        p_y=p_y-block_height;
        console.log("when up arrow is pressed,x = "+p_x+"and y = "+p_y);
        console.log("block image height = "+ block_height);
    canvas.remove(po);
    pu();
    
    
    }
}
function down(){
    if (p_y <=500){
        p_y=p_y+block_height;
        console.log("when down arrow is pressed,x = "+p_x+"and y = "+p_y);
        console.log("block image height = "+ block_height);
        canvas.remove(po);
        pu();

    
    }
}
function left(){
    if (p_x >=0){
        p_x=p_x-block_width;

        console.log("when left arrow is pressed,x = "+p_x+"and y = "+p_y);
        console.log("block image width = "+ block_width);
        canvas.remove(po);
        pu();
    }
}
function right(){
    if (p_x <=700){
        p_x=p_x+block_width;
        console.log("when right arrow is pressed,x = "+p_x+"and y = "+p_y);
        console.log("block image width = "+ block_width);
        canvas.remove(po);
        pu();
        
    
    }
}
