function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

var flag1, flag2;
var count1 = 0;
var count2 = 0;
var count3 = 0;

function change_one() {
    flag1 = true;
    if (flag1) {
        document.getElementById("first").disabled = 'true';
    }
    randomNumber1 = getRandomInt(6);
    var randomImageSource = "./images/" + "dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
    
    if (flag2) {
        winner_loser();
    };
}

function change_two() {
    flag2 = true;
    if (flag2) {
        document.getElementById("second").disabled = 'true';
    }
    randomNumber2 = getRandomInt(6);
    var randomImageSource = "./images/" + "dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);

    if (flag1) {
        winner_loser();
    }
}

var refresh_text = document.querySelector("h1");

function winner_loser() {
    flag1 = false;
    flag2 = false;

    document.getElementById("first").removeAttribute("disabled");
    document.getElementById("second").removeAttribute("disabled");

    if (randomNumber1 > randomNumber2) {
        count1 += 1;
        refresh_text.innerHTML = "Player 1: " + count1;
        console.log(count1);
    } else if (randomNumber1 < randomNumber2) {
        count2 += 1;
        refresh_text.innerHTML = "Player 2: " + count2;
        console.log(count2);
    } else {
        refresh_text.innerHTML = "Draw";
        count3 += 1;
        console.log(count3);
    }

    if (count1 + count2 === 3) {
        var winner = document.createElement("h2");
        if (count1 > count2) {
            winner.innerHTML = "Player 1 wins";
            document.getElementById("appendWinner").appendChild(winner);
            refresh_text.innerHTML = "New Game";
        } else if (count2 > count1) {
            winner.innerHTML = "Player 2 wins";
            document.getElementById("appendWinner").appendChild(winner);
            refresh_text.innerHTML = "New Game";
        }
        
        count1 = 0;
        count2 = 0;
        count3 = 0;
    }
}

  






//console.log(randomNumber1);