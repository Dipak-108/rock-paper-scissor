const moves = ["r", "p", "s"];
const extended_moves = ["Rock", "Paper", "scissor"];

function setZero(){
 return player_win = computer_win= 0;
   
};

setZero();

let images = document.querySelectorAll(".img1 ");
let value = document.querySelector(".message");
let score = document.querySelector(".win_count");

//console.log(images);

images.forEach((image) => {
  let user_pick;
  image.addEventListener("click", function (e) {
    const choose = e.currentTarget.classList;

    // console.log(choose);

    if (choose.contains("rock")) var user_pick = "r";
    else if (choose.contains("paper")) var user_pick = "p";
    else var user_pick = "s";

    let index = Math.floor(Math.random() * 3);
    //console.log(index);

    computer_pick = moves[index];

    user_pick_move = moves.indexOf(user_pick);
    computer_pick_move = moves.indexOf(computer_pick);

    //console.log( user_pick_move);

    user_pick_name = extended_moves[user_pick_move];
    computer_pick_name = extended_moves[computer_pick_move];

    // console.log(user_pick);
    // console.log(computer_pick);

    joint_moves = user_pick + computer_pick;
    //console.log(joint_moves);
    switch (joint_moves) {
      case "rr":
      case "ss":
      case "pp":
        value.textContent = "Draw!!";
        computer_win;
        player_win;

        break;

      case "rp":
      case "ps":
      case "sr":
        value.textContent =
          "you selected *" +
          user_pick_name +
          "* computer selected " +
          computer_pick_name +
          " computer win a point!!";
        computer_win++;

        break;

      case "rs":
      case "pr":
      case "sp":
        value.textContent =
          "you selected " +
          user_pick_name +
          " computer selected " +
          computer_pick_name +
          " Congratulations!!you win a point";
        player_win++;

        break;

      // case joint_moves == "ps":
      //   value.textContent="you selected "+user_pick+" computer selected "+computer_pick;
      //   break;

      // case joint_moves == "pr":
      //   value.textContent="you selected "+user_pick+" computer selected "+computer_pick;
      //   break;

      // case joint_moves == "sr":
      //   value.textContent="you selected "+user_pick+" computer selected "+computer_pick;
      //   break;

      // case joint_moves == "sp":
      //   value.textContent="you selected "+user_pick+" computer selected "+computer_pick;
      //   break;
    }
    //to be done tomorrow using if else statement
    switch (true) {
      case player_win >= 10:
        setZero();
        value.textContent="YAY!! you won the whole game!!"
        break;
      case computer_win >= 10:
        setZero();
        value.textContent="Darn it!! computer won the whole game!!"
    
        break;

      case player_win < 10:
      case computer_win < 10:
        score.textContent =
          "player: " + player_win + " - " + " computer: " + computer_win;
        break;
    }
  });
});
