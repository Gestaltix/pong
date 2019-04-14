class Ball{
    constructor(){
        this.positions = [50, 250];
        this.speed = [5, 5];
        this.p1Name = '';
        this.p2Name = '';
        this.scoreP1 = 0;
        this.scoreP2 = 0;
    }
    render(ctx){
        ctx.fillText(`${this.p1Name} ${this.scoreP1}`, 100, 100);
        ctx.fillText(`${this.p2Name} ${this.scoreP2}`, 900, 100);
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(this.positions[0], this.positions[1], 8, 0, 2 * Math.PI, false);
        ctx.fill();
    }
    move(){
        this.positions[0] += this.speed[0];
        this.positions[1] += this.speed[1];
        if(this.positions[0] >= 1000){
            this.positions[0] = 500;
            this.positions[1] = 450;
            this.speed[0] = (-this.speed[0]/this.speed[0]) * 5;
            this.speed[1] = -this.speed[1];
            this.scoreP1++;
        }
        if(this.positions[0] <= 0){
            this.positions[0] = 500;
            this.positions[1] = 450;
            this.speed[0] = (-this.speed[0]/this.speed[0]) * 5;
            this.speed[1] = -this.speed[1];
            this.scoreP2++;
        }
        if(this.positions[1] >= 900){
            this.speed[1] = -this.speed[1];
        }
        if(this.positions[1] <= 0){
            this.speed[1] = -this.speed[1];
        }
    }
}
