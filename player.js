class Player {
    constructor(){
        this.name=null
        this.distance=0;
        this.Rank=null
        this.index=null;

    }

    getCount(){
        var playerCountref=database.ref('playerCount')
        playerCountref.on("value",(data)=>{
            playerCount=data.val();

        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance
        });
      }
    
      static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
    
      getRank(){
        var RankRef=database.ref('Rank')
        RankRef.on("value",(data)=>{
              this.Rank=data.val();
        })
      }
    
      updateRank(rank){
        database.ref('/').update({
          Rank: rank
        })
    
      }

}