class Game {
    constructor() {

    }

    getState() {
       var  gameStateRef = database.ref('gameState').on("value", (data) => {
            gameState = data.val();
        })
    }

    updateState(state) {
        database.ref('/').update({
            gameState: state

        })
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }

    }

    play() {
        form.hide();

        Player.getPlayerInfo();
        player.getRank();

        if (allPlayers !== undefined) {
            background(G_Image);  
            imageMode(CENTER)
  image(R_Image,displayWidth/2-100,displayHeight/2,displayWidth*2-500,displayHeight*9)


            var index = 0;


            var x = 175;
            var y;

            for (var plr in allPlayers) {
                //add 1 to the index for every loop
                index = index + 1;

                //position the cars a little away from each other in x direction
                x = x + 200;
                //use data form the database to display the cars in y direction
                y = displayHeight - allPlayers[plr].distance;
                bikes[index - 1].x = x;
                bikes[index - 1].y = y;



                if (index === player.index) {
                    stroke(10);
                    fill("red");
                    ellipse(x, y, 60, 60);
                    bikes[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth / 2;
                    camera.position.y = bikes[index - 1].y;
                }

        


            }

        }

        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance += 10
            player.update();
        }

        if(keyIsDown(RIGHT_ARROW) && player.index !=null){
            bikes[player.index-1].x=bikes[player.index-1].x+20
        }

        if(keyIsDown(LEFT_ARROW) && player.index !=null){
            bikes[player.index-1].x=bikes[player.index-1].x-20
        }

   

        if (player.distance > 4010) {
            player.Rank = player.Rank + 1
            player.updateRank(player.Rank);
            gameState = 2;
        }

        drawSprites();
    }

    end() {
        console.log("Game Ended");
        //console.log(player.Rank);

    }

    spawnCoins(){
        if(frameCount %40===0){
            var coin=createSprite(Math.round(random(300,1000)),-4000,20,20)
            coin.addImage(C_Image)
            coin.scale=0.08
            coin.velocityY=10;
        }

    }
}
    

