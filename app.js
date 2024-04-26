const moves = ["r", "p", "s"];
const extended_moves=["Rock","Paper","scissor"];

let images = document.querySelectorAll(".img1 ");
let value = document.querySelector(".message");

//console.log(images);

images.forEach((image) => {
  var user_pick;
  image.addEventListener("click", function (e) {
    const choose = e.currentTarget.classList;

    // console.log(choose);

    if (choose.contains("rock")) var user_pick = "r";
    else if (choose.contains("paper")) var user_pick = "p";
    else var user_pick = "s";

    let index = Math.floor(Math.random() * 3);
    //console.log(index);

    computer_pick = moves[index];

    user_pick_move=moves.indexOf(user_pick);
    computer_pick_move=moves.indexOf(computer_pick);

    console.log( user_pick_move);

    user_pick_name=extended_moves[user_pick_move];
    computer_pick_name=extended_moves[computer_pick_move];


    console.log(user_pick);
    console.log(computer_pick);
    

    joint_moves = user_pick + computer_pick;
    console.log(joint_moves);
    switch (joint_moves) {
      case "rr" :
      case "ss" :
      case "pp":
        value.textContent="Draw!!"
        break;

        case "rp" :
        case "ps" :
        case "sr":
        value.textContent="you selected *"+user_pick_name +"* computer selected "+computer_pick_name+" computer won!!";
        
        break;

        case "rs" :
        case "pr" :
        case "sp":
        value.textContent="you selected "+user_pick_name+" computer selected "+computer_pick_name+ " Congratulations!!you won";
        
        

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
  });
});
