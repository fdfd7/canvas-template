import {drawPicture, onClick} from "./canvas";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function draw() {
    let fieldSize=125
    let pictureBeginHight = 686
    ctx.fillRect(50, 100, 400, 300)
    ctx.fillStyle = `rgb(0 0 255)`
    ctx.fillRect(25, 75, 100, 145)
    ctx.fillStyle = `rgb(255 0 0)`
    ctx.strokeStyle = `rgb(0 200 0)`
    ctx.beginPath()
    ctx.lineWidth = 10
    ctx.arc(300, 100, 50, 0, Math.PI * 2, true)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    ctx.strokeStyle = `rgb(255 255 0)`
    ctx.strokeRect(400, 500, 100, 100)
    ctx.fillStyle = `rgb(0 0 0)`
    ctx.font = "22.5px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("Quadrat", 450, 557.5)
    drawPicture(ctx, "black_bishop.svg", 210, 300)
    ctx.fillStyle= `rgb(0 0 0)`
    ctx.fillRect(0,650,100+8*fieldSize,100+8*fieldSize)
    ctx.clearRect(50,700,8*fieldSize,8*fieldSize)
    
    for(let i=0; i<=7; i++ ){
        for(let j=0; j<=7; j++ ){
            if((i+j)%2==0){
               ctx.fillStyle= `rgb(235 236 208)`
            }
            else if((i+j)%2== 1){
                ctx.fillStyle= `rgb(119 149 86)`
            }
            ctx.fillRect(50+j*fieldSize,700+i*fieldSize,fieldSize,fieldSize)
        }

    }
    for(let j=0; j<=7; j++ ){
        drawPicture(ctx, "chess/bP.svg",-38+j*fieldSize,pictureBeginHight-5+fieldSize)
    }
    for(let j=0; j<=7; j++ ){
        drawPicture(ctx, "chess/wP.svg",-38+j*fieldSize,pictureBeginHight-2+6*fieldSize)
    }
    
    ctx.strokeStyle= `rgb(0 0 0 )`
    ctx.beginPath()
    ctx.moveTo(50,fieldSize/2+700)
    ctx.lineTo(50+9*fieldSize,fieldSize/2+700)
    //ctx.stroke()
    drawPicture(ctx, "chess/bR.svg",-38+0*fieldSize,pictureBeginHight+0*fieldSize)
    drawPicture(ctx, "chess/bR.svg",-38+7*fieldSize,pictureBeginHight+0*fieldSize)
    drawPicture(ctx, "chess/wR.svg",-38+0*fieldSize,pictureBeginHight+7*fieldSize)
    drawPicture(ctx, "chess/wR.svg",-38+7*fieldSize,pictureBeginHight+7*fieldSize)
    drawPicture(ctx, "chess/bN.svg",-38+1*fieldSize,pictureBeginHight+0*fieldSize)
    drawPicture(ctx, "chess/bN.svg",-38+6*fieldSize,pictureBeginHight+0*fieldSize)
    drawPicture(ctx, "chess/wN.svg",-38+1*fieldSize,pictureBeginHight+7*fieldSize)
    drawPicture(ctx, "chess/wN.svg",-38+6*fieldSize,pictureBeginHight+7*fieldSize)
    drawPicture(ctx, "chess/bB.svg",-38+2*fieldSize,pictureBeginHight+0*fieldSize)
    drawPicture(ctx, "chess/bB.svg",-38+5*fieldSize,pictureBeginHight+0*fieldSize)
    drawPicture(ctx, "chess/wB.svg",-38+2*fieldSize,pictureBeginHight+7*fieldSize)
    drawPicture(ctx, "chess/wB.svg",-38+5*fieldSize,pictureBeginHight+7*fieldSize)
    drawPicture(ctx, "chess/bQ.svg",-38+3*fieldSize,pictureBeginHight+0*fieldSize)
    drawPicture(ctx, "chess/wQ.svg",-38+3*fieldSize,pictureBeginHight+7*fieldSize)
    drawPicture(ctx, "chess/bK.svg",-38+4*fieldSize,pictureBeginHight+0*fieldSize)
    drawPicture(ctx, "chess/wK.svg",-38+4*fieldSize,pictureBeginHight+7*fieldSize)
    ctx.font = "30px sans-serif"
    ctx.fillStyle = `rgb(255 255 255 )`
    for(let i=0; i<=7; i++ ){
        ctx.fillText(8-i, 75+8*fieldSize, 710+fieldSize/2+fieldSize*i)
    }
    const alphabet= ["a","b","c","d","e","f","g","h"]
    for(let j=0; j<=7; j++ ){
        ctx.fillText(alphabet[j], 50+(j+1/2)*fieldSize, 732+8*fieldSize)
    }
    for(let i=0; i<=7; i++ ){
        for(let j=0; j<=7; j++ ){
            onClick (50+j*fieldSize, 700+i*fieldSize, fieldSize, fieldSize, function() {alert(alphabet[j]+(8-i))} )
        }
    }    
}

"schwarz"
119,149,86
"weiß" ;
235,236,208
document.addEventListener("DOMContentLoaded", function () {
    draw();
})
