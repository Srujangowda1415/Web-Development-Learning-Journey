let user_choice=document.getElementById('user-choice');
let result=document.getElementById('outcome');
let computer_choice=document.getElementById('computer-choice');
let choice=""
const choices=["Rock✊","Paper✋","Scissors✌️"];


function rock(){
    choice="Rock✊"
    user_choice.innerHTML=choice;
    let rand_comp_choice=Math.floor(Math.random()*3);
    let comp_choice=choices[rand_comp_choice];
    computer_choice.innerHTML=comp_choice;
    if (choice=="Rock✊" && comp_choice=="Scissors✌️"){
        result.innerHTML="You Win! :)"
    }
    else if (choice=="Rock✊" && comp_choice=="Paper✋"){
        result.innerHTML="You Lose! :("
    }
    else if (choice=="Paper✋" && comp_choice=="Rock✊"){
        result.innerHTML="You Win! :)"
    }
    else if (choice=="Paper✋" && comp_choice=="Scissors✌️"){
        result.innerHTML="You Lose! :("
    }
    else if (choice=="Scissors✌️" && comp_choice=="Paper✋"){
        result.innerHTML="You Win! :)"
    }
    else if (choice=="Scissors✌️" && comp_choice=="Rock✊"){
        result.innerHTML="You Lose! :("
    }
    else{
        result.innerHTML="It's a Draw! :|"
    }
    

}
function paper(){
    choice="Paper✋"
    user_choice.innerHTML=choice;
    let rand_comp_choice=Math.floor(Math.random()*3);
    let comp_choice=choices[rand_comp_choice];
    computer_choice.innerHTML=comp_choice;
    if (choice=="Rock✊" && comp_choice=="Scissors✌️"){
        result.innerHTML="You Win! :)"
    }
    else if (choice=="Rock✊" && comp_choice=="Paper✋"){
        result.innerHTML="You Lose! :("
    }
    else if (choice=="Paper✋" && comp_choice=="Rock✊"){
        result.innerHTML="You Win! :)"
    }
    else if (choice=="Paper✋" && comp_choice=="Scissors✌️"){
        result.innerHTML="You Lose! :("
    }
    else if (choice=="Scissors✌️" && comp_choice=="Paper✋"){
        result.innerHTML="You Win! :)"
    }
    else if (choice=="Scissors✌️" && comp_choice=="Rock✊"){
        result.innerHTML="You Lose! :("
    }
    else{
        result.innerHTML="It's a Draw! :|"
    }
    

}
function scissors(){
    choice="Scissors✌️"
    user_choice.innerHTML=choice;
    let rand_comp_choice=Math.floor(Math.random()*3);
    let comp_choice=choices[rand_comp_choice];
    computer_choice.innerHTML=comp_choice;
    if (choice=="Rock✊" && comp_choice=="Scissors✌️"){
        result.innerHTML="You Win! :)"
    }
    else if (choice=="Rock✊" && comp_choice=="Paper✋"){
        result.innerHTML="You Lose! :("
    }
    else if (choice=="Paper✋" && comp_choice=="Rock✊"){
        result.innerHTML="You Win! :)"
    }
    else if (choice=="Paper✋" && comp_choice=="Scissors✌️"){
        result.innerHTML="You Lose! :("
    }
    else if (choice=="Scissors✌️" && comp_choice=="Paper✋"){
        result.innerHTML="You Win! :)"
    }
    else if (choice=="Scissors✌️" && comp_choice=="Rock✊"){
        result.innerHTML="You Lose! :("
    }
    else{
        result.innerHTML="It's a Draw! :|"
    }
    

}


