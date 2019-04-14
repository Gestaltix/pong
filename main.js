console.log('Heyo');
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
class Game{
    constructor(){
        this.ball = new Ball();
        this.paddle1 = new Paddle([15, 425], 's', 'w');
        this.paddle2 = new Paddle([975, 425], 'ArrowDown', 'ArrowUp');
        //addEventListener('keydown', ()=>{
          //  let option = event.key === r? true: false;
        //})
    }
    board(){
        context.fillStyle = 'blue';
        context.fillRect(0, 0, 1000, 900);
    }
    play(){
        this.ball.p1Name = prompt('Player 1 Name:');
        this.ball.p2Name = prompt('Player 2 Name:');
        setInterval(()=>{
            this.board();
            //this.paddle1.move();
            //this.paddle2.move();
            this.paddle1.render(context);
            this.paddle2.render(context);
            this.ball.move();
            this.ball.render(context);
            this.checkCollisions();
        }, 16);
    }
    checkCollisions(){
        if(this.ball.positions[1] > this.paddle1.positions[1] 
            && this.ball.positions[1] < this.paddle1.positions[1] + 100
            && this.ball.positions[0] < this.paddle1.positions[0] + 15){
                console.log('hit the paddle');
                this.ball.speed[0] = -this.ball.speed[0] * 1.25;
        }
        if(this.ball.positions[1] > this.paddle2.positions[1] 
            && this.ball.positions[1] < this.paddle2.positions[1] + 100
            && this.ball.positions[0] > this.paddle2.positions[0] - 8
            && this.ball.positions[0] < this.paddle2.positions[0]){
                console.log('hit the paddle');
                this.ball.speed[0] = -this.ball.speed[0] *1.15;
        }
    }
}
const game = new Game();
game.play();