
 



let secretnumber = Math.floor(Math.random()*20)+1;
let score= 20;
let highscore = 0;

let check = document.querySelector('.check');
check.addEventListener('click',()=>{

    const guess = Number(document.querySelector('.guess').value);
    //when there is no input
    if(!guess){
        document.querySelector('.message').textContent='⛔No Number';
    }


    //when player wins
    else if(guess === secretnumber){

        document.querySelector('.message').textContent='🎉correct Number';        
        
        document.querySelector('.score').textContent=score

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width='30rem'

        document.querySelector('.number').textContent = secretnumber;

        if(highscore<score){
            highscore=score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }


    else if(guess !== secretnumber){
        if(score>1){
            document.querySelector('.message').textContent= guess>secretnumber?'📈Number Too High!':'📉Number Too Low!';
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='💥you lsot the game!';
            document.querySelector('.score').textContent=score=0;
        }
        

    }
    

})


const again = document.querySelector('.again');
again.addEventListener('click',()=>{
    secretnumber = Math.floor(Math.random()*20)+1;
    score=20;
    document.querySelector('body').style.backgroundColor='#222';
    let number = document.querySelector('.number');
    number.style.width ='15rem';
    number.textContent = '?';
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value ='';
})