const dino = document.querySelector('.dino');
const background = document.querySelector('.bg');
var isJumping = false;
let position = 15;

function handleKeyUp(event)
{
    if (event.keyCode === 32)
    {
        if (!isJumping)
            dinoJump();      
    }
} 

function dinoJump()
{
    isJumping = true;
    let upInterval = setInterval(() => {
        if (position >= 165)
        {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (position <= 15)
                {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                else
                {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 25);
        }
        else
        {
            position += 20;
            dino.style.bottom = position + 'px';
        }  
    }, 25);
}

function createCactus()
{
    const cactus = document.createElement('div');
    let cactusPosition = 1300;
    let randomNumber = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1300 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60)
        {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }
        else if (((cactusPosition > 0) && (cactusPosition < 60)) && (position < 75))
        {
            clearInterval(leftInterval);
            clearTimeout(iteration);
            background.style.animationPlayState = 'paused';
            let text;
            text = document.getElementById('info');
            text.style.color = 'red';
            text.innerHTML = 'Fim de jogo!';
        }
        else
        {
            cactusPosition -= 15;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    let iteration = setTimeout(createCactus, randomNumber);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);