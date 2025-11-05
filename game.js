AFRAME.registerComponent("turtlecount", {

  init: function () {
 TurtlesRemaining=5
this.el.addEventListener('collide',function(e){
e.detail.target.el.remove();
TurtlesRemaining=TurtlesRemaining-1
console.log(TurtlesRemaining)
TTN=document.getElementById("nc")
console.log(TTN)
TTN.setAttribute('text',{value:String(TurtlesRemaining)})
if(TurtlesRemaining==0){
YWTG=document.getElementById("yw")
YWTG.setAttribute('text',{value:"You win!"})
}
})
  }
}
)