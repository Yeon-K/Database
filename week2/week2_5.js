const title = document.getElementById("js-title");
const range = document.getElementById("js-range");
const guess = document.getElementById("js-guess");
const inputNum = document.getElementById("js-input");
const result = document.getElementById("js-result");
const data = document.getElementById("num");

range.oninput = function(){
    data.innerText = `${range.value}`
    guess.addEventListener("submit", play);
}

guess.addEventListener('submit', (button)=>{
    button.preventDefault();
});

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function play(button){
    const randVal = range.value;
    const randNum = generateRandomNumber()
}



//게임 결과
function gameResult(val, randNum){
    const input = inputNum.value;
    
    form.innerText = `Your choice : ${input} machine choice : ${randNum}`;  //선택한 숫자 출력
    
    //입력한 숫자와 랜덤숫자가 같으면
    if(gameResult(input) === randNum) {
        result.textContent = "You win!"; //win 출력
    }

    //입력한 숫자와 랜덤숫자가 다르면
    else if (gameResult(input) !== randNum) {
        result.textContent = "You lose!"; //lose 출력
    }
};