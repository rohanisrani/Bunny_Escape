let resources = {images:[ 
                        {id: "bk", src: "images/bk.jpg"},
                        {id: "bkone", src: "images/bk1.gif"},
                        {id: "bktwo", src:"images/bk2.jpg"},
                        {id: "bkthree", src:"images/bk3.jpg"},
                        {id: "bkfour", src:"images/bk4.jpg"},
                        {id: "bkfive", src:"images/bk5.jpg"},
                        {id: "bksix", src:"images/bk6.png"},
                        {id: "character", src: "images/character (1).png"},
                        {id: "bar", src: "images/bar.png"},
                        {id: "title", src: "images/Title.png"},
                        {id: "psts", src: "images/psts.png"},
                        {id: "htp", src: "images/htp.png"},
                        {id: "door", src: "images/door.png"},
                        {id: "keys", src: "images/key.png"},
                        {id: "next", src: "images/next.png"},
                        {id: "tai_lung", src: "images/tai lung.png"},
                        {id: "lord_shen", src: "images/Lord_Shen.png"},
                        {id: "health", src: "images/health.png"},
                        {id: "kai", src: "images/kai.png"},
                        {id: "boss_wolf", src: "images/boss wolf.png"},
                        {id: "bkseven", src: "images/bk7.jpg"},
                        {id: "azula", src: "images/Azula.png"},
                        {id: "you_win", src: "images/youwin.png"},
                        {id: "yse", src: "images/yse.png"},
                        {id: "go",src: "images/go.png"},
                        {id: "blnt", src: "images/blnt.png"}, 
                        {id: "htpbk", src: "images/htp2.PNG"},
                        {id: "bkeight", src: "images/bk8.PNG"},
                        {id: "madeby", src: "images/Made-By.png"}, 

                        


                    
                      

                  ],
                 audios:[ 
                   
                          //{id:"hit", src: "audios/hit.ogg"},
                          
                
                  ]
                };


function preload(){
    game = new Game("game");
    game.preload(resources);
    game.state = init;
    gameloop();
}
document.onload = preload();

function gameloop(){
  game.processInput()
  if(game.ready){
    game.state();
  }
  game.update()
  setTimeout(gameloop,20);
}

function init (){

  //background images
  bk = new Sprite(game.images.bk, game)
  bkone = new Sprite(game.images.bkone, game) 
  bkone.scale = 1.6
  bktwo = new Sprite(game.images.bktwo, game)
  bkthree = new Sprite(game.images.bkthree, game)
  bkthree.scale = 1.5
  bkfour = new Sprite (game.images.bkfour, game)
  bkfive = new Sprite (game.images.bkfive, game)
  bkfive.scale = 1.5
  bksix = new Sprite (game.images.bksix, game)
  bkseven = new Sprite (game.images.bkseven, game)
  htpbk = new Sprite (game.images.htpbk, game)
  htpbk.scale = 1.3
  bkeight = new Sprite (game.images.bkeight, game)
  bkeight.scale = 1.3
  bkeight.y = 330
  
  //character
  character = new Animation(game.images.character,6,game,792/6,222/1)
  character.scale = 0.5
  tai_lung = new Sprite (game.images.tai_lung, game)
  tai_lung.scale = 0.2
  tai_lung.setVector(8,50)
  lord_shen = new Sprite (game.images.lord_shen, game)
  lord_shen.scale = 0.3
  lord_shen.setVector(8,50)
  kai = new Sprite (game.images.kai, game) 
  kai.scale = 0.3
  kai.setVector(8,50)
  boss_wolf = new Sprite (game.images.boss_wolf, game)
  boss_wolf.setVector(8,50)
  boss_wolf.scale = 0.25
  azula = new Sprite (game.images.azula, game)
  azula.setVector(8,50)
  azula.scale = 0.2

  //game features
  bar = new Sprite (game.images.bar, game)
  bar.scale = 0.9
  bar.y = game.height - 25
  door = new Sprite (game.images.door, game)
  door.scale = 0.8
  door.x += 400
  door.y += 100
  keys = new Sprite (game.images.keys, game)
  keys.scale = 0.07
  scorekeys = new Sprite (game.images.keys, game)
  scorekeys.scale = 0.05
  next = new Sprite (game.images.next, game)
  next.scale = 0.4
  next.y = game.height - 35
  next.x = game.width - 80
  health = new Animation (game.images.health,12,game,997/5,598/3)
  health.scale = 0.5
  yse = new Sprite (game.images.yse, game)
  yse.scale = 0.6
  yse.y = 100

  //start/end screen features
  title = new Sprite (game.images.title, game)
  title.scale = 0.9
  title.y -= 200
  psts = new Sprite (game.images.psts, game)
  psts.scale = 0.4
  psts.y += 230
  htp = new Sprite (game.images.htp, game)
  htp.y += 230
  htp.x -= 360
  htp.scale = 0.45
  you_win = new Sprite (game.images.you_win, game)
  you_win.scale = 1.5
  go = new Sprite (game.images.go, game)
  go.scale = 1.3
  go.y = 150
  blnt = new Sprite (game.images.blnt, game)
  blnt.scale = 0.7
  madeby = new Sprite (game.images.madeby, game)
  madeby.scale = 0.25
  madeby.y = 500
  madeby.x = 850
  
  //fonts
  scorefont = new Font("35px","Arial","#F0F0F0","#333")


  game.state = startscreen;
}



function startscreen (){

  bk.draw()
  bar.draw()
  psts.draw()
  htp.draw()
  title.draw()
  character.draw()
  character.y = 300
  madeby.draw()

  if (htp.collidedWith(mouse) && mouse.leftClick ){
      game.state = howtoplay
 
    }

  if(key.pressed[key.space]){
    game.state = description
  }

}


function howtoplay(){
  htpbk.draw()
  bar.draw()
  game.drawText("Click [ B ] to go back", game.width / 2 - 120 ,game.height - 30, scorefont)
  if(key.pressed[key.B]){
    game.state = startscreen
  }

}

function description(){
  bkeight.draw()
  bar.draw()
  character.draw()
  character.x = 700
  character.y = 65


  game.drawText("Click [ ENTER ] to continue", game.width / 2 - 220 ,game.height - 30, scorefont)
  if ( key.pressed[key.enter]){
    game.state = main
  }

}


function main (){

  bktwo.draw()
  door.draw()
  bar.draw()
  character.draw()
  door.visible = true
  
  game.drawText(` TUTORIAL : `, game.width / 2 - 480 , game.height - 25, scorefont)
  game.drawText(` Use your arrow keys to move around `, game.width / 2 - 250 , game.height - 25, scorefont)

  
  if (key.pressed[key.up]){
    character.y -= 5
  }
  if (key.pressed[key.down]){
    character.y += 5
  }
  if (key.pressed[key.left]){
    character.x -= 5
  }
  if (key.pressed[key.right]){
    character.x += 5
  }


  if (character.collidedWith(door)){
    game.state = maintwo
    door.visible = false
    character.x = 100
  }

}


function maintwo(){

  bkthree.draw()
  character.draw()
  bar.draw()
  door.visible = true
  scorekeys.draw()
  scorekeys.x = 70
  scorekeys.y = 500
  tai_lung.move(true)
  health.draw()
  health.x = 750
  health.y = 500

  //draw texts
  game.drawText(` LEVEL 1`, game.width / 2 - 80, game.height - 25, scorefont )
  game.drawText(` X ${game.score} `, scorekeys.right+ 5, scorekeys.y + 13, scorefont)
  game.drawText(` = ${character.health}`, health.right  - 30, health.y + 13, scorefont)

  //characters movement 
  if(key.pressed[key.up]){
    character.y -= 5
  }
  if(key.pressed[key.down]){
    character.y += 5
  }
  if(key.pressed[key.left]){
    character.x -= 5
  }
  if(key.pressed[key.right]){
    character.x += 5
  }

  //keys positioning
  keys.draw()
  keys.x = 100
  keys.y = 100

  // if statements 
  if(character.collidedWith(keys)){
    keys.visible = false
    game.score += 1
  }

  if(character.collidedWith(tai_lung)){
    character.health -= 5
    tai_lung.moveTo(randint(100,860), randint(100,500))
  }

  if(character.health < 0){
    game.state = game_over
  }

  if(game.score >= 1){
    door.draw()
  }

  if(character.collidedWith(door) ){
    game.state = mainthree
    door.visible = false
    character.x = 100
    keys.visible = true

  }


}
function mainthree(){

  bkfour.draw()
  character.draw()
  bar.draw()
  keys.draw()
  lord_shen.move(true)
  health.draw()
  health.x = 750
  health.y = 500

  //keys positioning 
  keys.x = 500
  keys.y = 400

  scorekeys.draw()
  scorekeys.x = 70
  scorekeys.y = 500

  //draw Texts
  game.drawText(` LEVEL 2 `, game.width / 2 - 80, game.height - 25, scorefont )
  game.drawText(` X ${game.score} `, scorekeys.right+ 5, scorekeys.y + 13, scorefont)
  game.drawText(` = ${character.health}`, health.right  - 30, health.y + 13, scorefont)


  //characters movement
  if (key.pressed[key.up]){
    character.y -= 5
  }
  if (key.pressed[key.down]){
    character.y += 5
  }
  if (key.pressed[key.left]){
    character.x -= 5
  }
  if (key.pressed[key.right]){
    character.x += 5
  }
  

  //if statements 
  if (character.collidedWith(keys)){
    game.score += 1
    keys.visible = false
    door.visible = true
  }

  if(character.collidedWith(lord_shen)){
    character.health -= 5
    lord_shen.moveTo(randint(100,860), randint(100,500))
  }

  if (game.score >= 1){
    door.draw()  
 }

  if(character.health < 0){
    game.state = game_over
  }

  if (character.collidedWith(door) ){
    game.state = mainfour
    door.visible = false
    character.x = 100
    keys.visible = true

  } 

}

function mainfour(){

  bkfive.draw()
  bar.draw()
  character.draw()
  keys.draw()
  kai.move(true)
  health.draw()
  health.x = 750
  health.y = 500

  scorekeys.draw()
  scorekeys.x = 70
  scorekeys.y = 500

  //keys positioning 
  keys.x = 500
  keys.y = 100

  //draw Texts
  game.drawText(` LEVEL 3 `, game.width / 2 - 80, game.height - 25, scorefont )
  game.drawText(` X ${game.score} `, scorekeys.right+ 5, scorekeys.y + 13, scorefont)
  game.drawText(` = ${character.health}`, health.right  - 30, health.y + 13, scorefont)

  //characters movement
  if (key.pressed[key.up]){
    character.y -= 5
  }
  if (key.pressed[key.down]){
    character.y += 5
  }
  if (key.pressed[key.left]){
    character.x -= 5
  }
  if (key.pressed[key.right]){
    character.x += 5
  }

  //if statements 
  if(character.collidedWith(kai)){
    character.health -= 5
    kai.moveTo(randint(100,860), randint(100,300))
  }

   if (game.score >= 1){
    door.draw()  
 }

  if(character.health < 0){
    game.state = game_over
  }

 if (character.collidedWith(keys)){
    game.score += 1
    keys.visible = false
    door.visible = true
  }

  if (character.collidedWith(door) ){
    game.state = mainfive
    door.visible = false
    character.x = 100
    keys.visible = true
    }
}

function mainfive(){
  bksix.draw()
  bar.draw()
  character.draw()
  boss_wolf.move(true)
  keys.draw()
  health.draw()
  health.x = 750
  health.y = 500

  scorekeys.draw()
  scorekeys.x = 70
  scorekeys.y = 500

  //keys positioning 
  keys.x = 600
  keys.y = 300

  //draw Texts
  game.drawText(` LEVEL 4 `, game.width / 2 - 80, game.height - 25, scorefont )
  game.drawText(` X ${game.score} `, scorekeys.right+ 5, scorekeys.y + 13, scorefont)
  game.drawText(` = ${character.health}`, health.right  - 30, health.y + 13, scorefont)

  //characters movement
  if (key.pressed[key.up]){
    character.y -= 5
  }
  if (key.pressed[key.down]){
    character.y += 5
  }
  if (key.pressed[key.left]){
    character.x -= 5
  }
  if (key.pressed[key.right]){
    character.x += 5
  }

  //if statements 
  if(character.collidedWith(boss_wolf)){
    character.health -= 5
    boss_wolf.moveTo(randint(100,860), randint(100,300))
  } 

  if (game.score >= 1){
    door.draw()  
 }

 if(character.health < 0){
   game.state = game_over
 }

 if (character.collidedWith(keys)){
    game.score += 1
    keys.visible = false
    door.visible = true
  }

  if (character.collidedWith(door) ){
    game.state = final
    door.visible = false
    character.x = 100
    keys.visible = true
    }


}

function final(){
  bkseven.draw()
  bar.draw()
  character.draw()
  azula.move(true)
  keys.draw()
  health.draw()
  health.x = 750
  health.y = 500

  scorekeys.draw()
  scorekeys.x = 70
  scorekeys.y = 500

  //keys positioning 
  keys.x = 300
  keys.y = 100

  //draw Texts
  game.drawText(` FINAL LEVEL `, game.width / 2 - 100, game.height - 25, scorefont )
  game.drawText(` X ${game.score} `, scorekeys.right+ 5, scorekeys.y + 13, scorefont)
  game.drawText(` = ${character.health}`, health.right  - 30, health.y + 13, scorefont)

  //characters movement
  if (key.pressed[key.up]){
    character.y -= 5
  }
  if (key.pressed[key.down]){
    character.y += 5
  }
  if (key.pressed[key.left]){
    character.x -= 5
  }
  if (key.pressed[key.right]){
    character.x += 5
  }

  //if statements 
  if(character.collidedWith(azula)){
    character.health -= 5
    azula.moveTo(randint(100,860), randint(100,300))
  } 

  if (game.score >= 1){
    door.draw()  
 }

 if(character.health < 0){
   game.state = game_over
 }

 if (character.collidedWith(keys)){
    game.score += 1
    keys.visible = false
    door.visible = true
  }

  if (character.collidedWith(door) ){
    game.state = youwin
    door.visible = false
    character.x = 100
    keys.visible = true
    }

}




function game_over(){
  bk.draw()
  bar.draw()
  go.draw()
  blnt.draw()
  game.drawText(` Play Again? [ Y / N ] `, game.width / 2 - 150, game.height - 30, scorefont)

  if ( key.pressed[key.Y]){
    game.state = main
    character.health = 100

  }
  if ( key.pressed[key.N]){
    game.state = startscreen
    character.y = 300
  
}

function youwin(){
  bk.draw()
  bar.draw()
  you_win.draw()
  yse.draw()
  character.draw()
  character.x = 500
  character.y = 380

  if ( key.pressed[key.Y]){
    game.state = main
    character.health = 100

  }
  if ( key.pressed[key.N]){
    game.state = startscreen
    character.y = 300
  }
  game.drawText(` Play Again? [ Y / N ] `, game.width / 2 - 150, game.height - 30, scorefont)
}
}