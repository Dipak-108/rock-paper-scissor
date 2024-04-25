const moves=['r','p','s'];

let images=document.querySelectorAll(".img1 ");
let value=document.querySelectorAll(".message");



//console.log(images);

images.forEach((image) => {
    var user_pick;
    image.addEventListener("click", function(e){
        const choose=e.currentTarget.classList;

       // console.log(choose);

        if(choose.contains('rock')) var user_pick="r";

        else if(choose.contains('paper'))  var user_pick="p";

        else var user_pick="s";
                
       
        let index=Math.floor(Math.random()*3);
        console.log(index);

        computer_pick=moves[index];
        //console.log(computer_value);

        switch(true){
            case user_pick===computer_pick:
                console.log("thisss")
                break;
            
            default:
                console.log("uajhsd")
        }

        

    })
    
});