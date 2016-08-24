// Your code here
function SmartPlantEater() {
  this.energy = 20;
  this.lastAction = "";
  
}

SmartPlantEater.prototype.act = function(view) {
  var space = this.direction && view.look(this.direction) == " " ? this.direction : view.find(" ");
  if (this.energy > 80 && space) {
    this.lastAction = "reproduce";
    return {type: "reproduce", direction: space};
  }
  var plant = view.find("*");
  if (this.lastAction == "move" &&
      plant &&
      (this.energy < 20 || Math.random() >= 0.5)) {
	this.lastAction = "eat";
    return {type: "eat", direction: plant};
  }
  if (space) { 
    this.lastAction = "move";
    this.direction = space;
    return {type: "move", direction: space};
  }
}

animateWorld(new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
));
