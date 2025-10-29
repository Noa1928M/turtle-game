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
})
  }
}
)