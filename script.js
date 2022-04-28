var turn = 'X';
var array = [2,3,4,5,6,7,8,9,10];
var finsih = false;

function clicked(a){
    if(finsih || array[a-1]==-1 || array[a-1]==1)return;
    document.getElementsByClassName("boxText")[a-1].innerHTML = turn;
    if(turn=='X'){
        array[a-1]=1;
        turn = 'Y';
    }else if(turn=='Y'){
        array[a-1]=-1;
        turn = 'X';
    }
    document.getElementById("turnText").innerHTML = "TURN FOR "+turn;
    checkWin();
}

function changeTurn(){
    turn = turn=='X'?'Y':'X';
}

function checkWin(){
    var i = 0;
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(i=0;i<wins.length;i++){
        if(array[wins[i][0]]==array[wins[i][1]] && array[wins[i][1]]==array[wins[i][2]]){
            changeTurn();
            document.getElementById("turnText").innerHTML = turn+" WON";
            turn = ' ';
            finsih = true;
            return;
        }
    }
}