function subtract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function printDay(num){
    const days = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    }
    return days[num]
}

function lastElement(arr){
    return arr[arr.length - 1];
}

function numberCompare(x,y){
    if (x > y){
        return `${x} is greater`
    }
    if (x < y){
        return `${y} is greater`
    }
    if (x === y){
        return `${x} equals ${y}`
    }
}

function singleLetterCount(string,letter){
    let total = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i].toLowerCase() === letter.toLowerCase()){
            total++;
        }
    }
    return `There are ${total} ${letter}'s`;
}

function multipleLetterCount(str){
    str = str.toLowerCase();
    let output = {}
    for (let i = 0; i < str.length; i++){
        if (output[str[i]] === undefined){
            output[str[i]] = 1;
        }
        else {
            output[str[i]] ++;
        }
    }
    return output;
}

function arrayManipulation(arr, cmd, loc, val){
    if (cmd == 'remove' && loc == 'end'){
        arr.pop();
    }
    else if (cmd == 'remove' && loc == 'beginning'){
        arr.shift();
    }
    else if (cmd == 'add' && loc == 'end'){
        arr.push(val);
    }
    else if (cmd == 'add' && loc == 'beginning'){
        arr.unshift(val);
    }
    return arr;
}

function isPalindrome(str){
    str = str.toLowerCase();
    str = str.replace(/\s+/g, '');
    if (str.split("").reverse().join("") === str){
        return true
    }
    else return false
}

function rockPaperScissors(opt){
    let bot = Math.floor(Math.random()*3);
    // 0 = rock, 1 = paper, 2 = scissors
    if (opt === 'rock' && bot === 0){
        return 'Rock vs. Rock, Try Again'
    }
    if (opt === 'rock' && bot === 1){
        return 'Rock vs. Paper, You Lose'
    }
    if (opt === 'rock' && bot === 2){
        return 'Rock vs. Scissors, You Win'
    }
    if (opt === 'paper' && bot === 0){
        return 'Paper vs. Paper, Try Again'
    }
    if (opt === 'paper' && bot === 1){
        return 'Paper vs. Scissors, You Lose'
    }
    if (opt === 'paper' && bot === 2){
        return 'Paper vs. Rock, You Win'
    }
    if (opt === 'scissors' && bot === 0){
        return 'Scissors vs. Scissors, Try Again'
    }
    if (opt === 'scissors' && bot === 1){
        return 'Scissors vs. Rock, You Lose'
    }
    if (opt === 'scissors' && bot === 2){
        return 'Scissors vs. Paper, You Win'
    }
}

