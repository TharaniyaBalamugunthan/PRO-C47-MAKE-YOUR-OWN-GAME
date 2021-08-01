class Player{
    constructor(){
        this.index = null;
        this.score = 0;
        this.distanceX = 0;
        this.distanceY = 0;
        this.name = null;
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        }
            )
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
        name : this.name,
        distanceX:this.distanceX,
        distanceY:this.distanceY,
        score:this.score, 
        })
    }   

    static getPlayerInfo(){
        var playerInforef = database.ref('players');
        playerInforef.on("value",(data)=>{
            allPlayers = data.val();
        })

    }
    
}