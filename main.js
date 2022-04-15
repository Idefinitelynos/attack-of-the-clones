var canvas=new fabric.Canvas("canvas")
x = 200
y = 200
width = 30
height = 30
var player_object = ""
var block_object = ""
function playerUpdate(){
    fabric.Image.fromURL("player.png",function(img){
        player_object=img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(150)
        player_object.set({
            top:y,left:x
        })
        canvas.add(player_object)
    })
}
function blockUpdate(getImage){
    fabric.Image.fromURL(getImage,function(img){
        block_object=img
        block_object.scaleToWidth(width)
        block_object.scaleToHeight(height)
        block_object.set({
            top:y,left:x
        })
        canvas.add(block_object)
    })
}
window.addEventListener ("keydown", my_keydown)
function my_keydown(e){
    Keypressed=e.keyCode
    console.log(Keypressed)
    if (Keypressed=="80" && e.shiftKey==true) {
    console.log("shift & P pressed together")
    width=width +10 
    height=height +10
    document.getElementById("currentwidth").innerHTML=width       
    document.getElementById("currentheight").innerHTML=height
    }
    if (Keypressed=="77" && e.shiftKey==true) {
        console.log("shift & M pressed together")
        width=width -10 
        height=height -10
        document.getElementById("currentwidth").innerHTML=width       
        document.getElementById("currentheight").innerHTML=height
        }
        if (Keypressed=="38" ) {
        up()
            console.log("up")
        }            
        if (Keypressed=="39" ) {
            right()
                console.log("right")
            }            
            if (Keypressed=="40" ) {
                down()
                    console.log("down")
                }            
                if (Keypressed=="37" ) {
                    left()
                        console.log("left")
                    }            
        if (Keypressed=="67" ) {
            blockUpdate("cloud.jpg")
            console.log("C")
        }
        if (Keypressed=="68" ) {
            blockUpdate("dark_green.png")
            console.log("D")
        }
        if (Keypressed=="71" ) {
            blockUpdate("ground.png")
            console.log("G")
        }
        if (Keypressed=="76" ) {
            blockUpdate("light_green.png")
            console.log("L")
        }
        if (Keypressed=="82" ) {
            blockUpdate("roof.jpg")
            console.log("R")
        }
        if (Keypressed=="84" ) {
            blockUpdate("trunk.jpg")
            console.log("T")
        }
        if (Keypressed=="85" ) {
            blockUpdate("unicue.png")
            console.log("U")
        }
        if (Keypressed=="87" ) {
            blockUpdate("wall.jpg")
            console.log("W")
        }
        if (Keypressed=="89" ) {
            blockUpdate("yellow_wall.png")
            console.log("Y")
        }
}
function up(){
    if (y>0) {
    y=y-height 
    console.log(height)   
    console.log("x= "+ x+" , y= "+y)
    canvas.remove(player_object)
    playerUpdate()     
    }
}
function down(){
    if (y<500) {
    y=y+height 
    console.log(height)   
    console.log("x= "+ x+" , y= "+y)
    canvas.remove(player_object)
    playerUpdate()     
    }
}
function left(){
    if (x>0) {
    x=x-width 
    console.log(width)   
    console.log("x= "+ x+" , y= "+y)
    canvas.remove(player_object)
    playerUpdate()     
    }
}
function right(){
    if (x<850) {
    x=x+width 
    console.log(width)   
    console.log("x= "+ x+" , y= "+y)
    canvas.remove(player_object)
    playerUpdate()     
    }
}