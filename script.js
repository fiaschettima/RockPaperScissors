window.alert("Welcome to Rock, Paper, Scissors!")
var play = confirm("Do you want to play")

var wins = 0;
var losses = 0;
var ties = 0;
var RPS = ['R', 'P', 'S']
window.alert("wins: " + wins + "\nlosses: " + losses + "\nties: " + ties)


while (play){
    var randNum = Math.floor(Math.random()*3)
    var computerAnswer = RPS[randNum]
    var userAnswer = prompt("Type R, P, or S")
    
    if (userAnswer === computerAnswer) {
        window.alert("You tied")
        ties++;
        window.alert("wins: " + wins + "\nlosses: " + losses + "\nties: " + ties)
    } else if (userAnswer == 'R'){
        if (computerAnswer == 'S') {
            window.alert("You won!")
            wins++;
            window.alert("wins: " + wins + "\nlosses: " + losses + "\nties: " + ties)
            play = confirm("Do you want to play again?")
        } else {
            window.alert("Computer won.")
            losses++;
            window.alert("wins: " + wins + "\nlosses: " + losses + "\nties: " + ties)
            play = confirm("Do you want to play again?")
        }
    }
}