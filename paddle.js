class Paddle{
    constructor(positions, downKeyDown, upKeyDown){
        this.positions = positions;
        addEventListener('keydown', ()=>{
            if(event.key === downKeyDown){
                this.moveDown();
            }
        });
        addEventListener('keydown', ()=>{
            if(event.key === upKeyDown){
                this.moveUp();
            }
        });
    }
    render(ctx){
        ctx.fillStyle = 'white';
        ctx.fillRect(this.positions[0], this.positions[1], 8, 100);
    }
    moveUp(){
        if(this.positions[1] >= 0){
            this.positions[1] = this.positions[1] - 100;
        }
    }
    moveDown(){
        if(this.positions[1] <= 900){
            this.positions[1] = this.positions[1] + 100;
        }
    }
}