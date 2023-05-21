// Good Luck! You got this 💪🏾
// Write your code here.
function PlayGame(Player1, Player2){
    if(Player1 == Player2){
        return("Waa Barbar dhac")
    }else if(Player1 == "Xajar" && Player2 == "Waraqa"){
        return("Player2 ayaa Guulaystay")
    }else if(Player1 == "Xajar" && Player2 == "Maqas"){
        return("Player1 ayaa Guulaystay")
    }else if(Player1 == "Waraqa" && Player2 == "Maqas"){
        return("Player2 ayaa Guulaystay")
    }else if(Player1 == "waraqa" && Player2 == "Xajar"){
        return ("Player1 ayaa Guulaystay")
    }else if (Player1 == "Maqas" && Player2 == "Waraqa"){
        return("Player1 ayaa Guulaystay")
    }else if (Player1 == "Maqas" && Player2 == "Xajar"){
        return("Player2 ayaa Guulaystay")
    }else{
        return("Maad Galin Weedhihii Ciyaarta")
    }
    
}
console.log (PlayGame ("Waraqa","Maqas"))
console.log (PlayGame ("Xajar","Maqas"))
console.log (PlayGame ("Maqas","Maqas"))
console.log (PlayGame ("qori","Maqas"))