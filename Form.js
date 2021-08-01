class Form {
    constructor(){
        this.button = createButton('PLAY');
        this.title = createElement('h2');
        this.greeting = createElement('h2');
        this.reset = createButton('Reset');
    }

    hide(){
        this.button.hide();
        this.title.hide();
        this.greeting.hide()
    }

    display(){
        this.title.html("Ghost Hunt");
        this.title.position(750,50);
        this.title.style('font-size','70px');
        this.title.style('color','black');
        this.button.position(830,280);
        this.button.style('width','200px');
        this.button.style('height','40px');
        this.button.style('background','silver');
        
        this.button.mousePressed(()=>{
            this.title.hide();
            this.button.hide();
            playerCount+=1;
            player.index=playerCount;
            player.updateCount(playerCount);
            if(playerCount === 1){
                console.log(1)
                player.name = 'greenGhost'
                player.update();
                this.greeting.html("Hello Green Ghost");
                this.greeting.position(550,200);
                this.greeting.style('color','green');
                this.greeting.style('font-size','100px');
            }    
            if(playerCount === 2){
                console.log(2)
                player.name = 'purpleGhost'
                player.update()
                this.greeting.html("Hello Purple Ghost");
                this.greeting.position(550,200);
                this.greeting.style('color','purple');
                this.greeting.style('font-size','100px');
            }

            this.reset.mousePressed(()=>{
                player.updateCount(0);
                game.update(0);
              });
          

        })
    }
}
