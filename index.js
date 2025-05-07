var player = "X"
var game_end = false
var counter = 0
var won = false
var game_matrix = [
    ["","",""],
    ["","",""],
    ["","",""],
]

function update_indicator(){
    var indicator = ""
    if (counter === 9 && !won){
        indicator = 'draw!'
        document.getElementById("indicator").innerHTML = indicator
        game_end = true
        return
    }
    if(!game_end){
        indicator = "Player " + player + "'s turn!"
        counter++
    }
    else{
        indicator = "The winner is " + player + "!"
    }
    document.getElementById("indicator").innerHTML = indicator
}

window.onload = function(){
    update_indicator()
}

function button_clicked(row,col){
    var name = String(row) + "," + String(col);
    var button = document.getElementsByName(name)[0]
    if (button.value === "" && !game_end) {
        button.value = player;
        game_matrix[row][col] = player
        if (player === "X"){
            button.style="color: red"
        }
        else{
            button.style="color: green"
        }
        check_win()
        update_indicator()
        if(game_end){restart()}
    }   
}

function change_player(){
    player = (player === "X") ? "O" : "X"; 
}

function check_win(){
    if(game_matrix[0][0] === game_matrix[1][1] && game_matrix[0][0] === game_matrix[2][2] && game_matrix[0][0] != "" && game_matrix[1][1] != "" && game_matrix[2][2] != ""){
        game_end=true
        won = true
    }
    else if (game_matrix[0][2] === game_matrix[1][1] && game_matrix[0][2] === game_matrix[2][0] && game_matrix[0][2] != "" && game_matrix[1][1] != "" && game_matrix[2][0] != ""){
        game_end = true
        won = true
    }
    else{
        for(var i = 0; i <= 2; i++){
            if (game_matrix[i][0] === game_matrix[i][1] && game_matrix[i][0] === game_matrix[i][2] && game_matrix[i][0] != "" && game_matrix[i][1] != "" && game_matrix[i][2]!= ""){
                game_end = true
                won = true
            }
            else if(game_matrix[0][i] === game_matrix[1][i] && game_matrix[0][i] === game_matrix[2][i] && game_matrix[0][i] != "" && game_matrix[1][i] != "" && game_matrix[2][i]!= ""){
                game_end = true
                won = true
            }
            else{
                change_player()
            }
        }
    }
}

function restart(){
    const restart_button = document.createElement("input")
    restart_button.type = "button"
    restart_button.value = "Restart"
    restart_button.id = "restart"
    restart_button.onclick = () => location.reload()
    document.body.appendChild(restart_button)
}
