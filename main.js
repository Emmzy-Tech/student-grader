    var hName = document.querySelector(".name");
    var hScore = document.querySelector(".score1");
    var hScore2 = document.querySelector(".score2");
    var button = document.querySelector("button");
    var hResult = document.querySelector(".result");
    

button.addEventListener('click', function(){
    calScore();
    slide();
    inputClear();
})

function slide(){
  hResult.classList.add("slide");
}
var degrees = ["A", "B", "C", "D", "E"];
var passLimit = [91, 81, 71, 61, 51];


function calScore(){
    var scores = parseInt(hScore.value, 10) + parseInt(hScore2.value, 10);
    
        // hResult.innerHTML = scores;
        if(scores >= passLimit[0]){
            hResult.innerHTML = `${hName.value} passed final exam successfully: <br> He has scored ${scores} points he got diploma with degree ${degrees[0]}`;
        } 
        else if(scores >= passLimit[1] && scores < passLimit[0]){
            hResult.innerHTML = `${hName.value} passed final exam successfully: <br> He has scored ${scores} points he got diploma with degree ${degrees[1]}`;
        }
        else if(scores >= passLimit[2] && scores < passLimit[1]){
            hResult.innerHTML = `${hName.value} passed final exam successfully: <br> He has scored ${scores} points he got diploma with degree ${degrees[2]}`;
        }
        else if(scores >= passLimit[3] && scores < passLimit[2]){
            hResult.innerHTML = `${hName.value} passed final exam successfully: <br> He has scored ${scores} points he got diploma with degree ${degrees[3]}`;
        }
        else if(scores >= passLimit[4] && scores < passLimit[3]){
            hResult.innerHTML = `${hName.value} passed final exam successfully: <br> He has scored ${scores} points he got diploma with degree ${degrees[4]}`;
        }
        if(scores < passLimit[4]){
            hResult.innerHTML = `${hName.value} he has scored ${scores} points he has failed and he has to try again next year`;
            hResult.style.color = "red";
        }
        else{
            hResult.style.color = "#06aa29";
        }
    }


    function inputClear(){
        hScore.value = ""; 
        hScore2.value= "";
        hName.value = "";
    }




// function calScore(){
//     for(let i = 0; i < students.length; i++){
//         var scores = students[i].score1 + students[i].score2;
//         if(scores >= passLimit[0]){
//             hResult.innerHTML = `${students[i].name} passed final exam successfully: <br> He has scored ${scores} points he got diploma with degree ${degrees[0]}`
//         }
//         if(scores >= passLimit[1] && scores < passLimit[0]){
//             console.log(students[i].name + " passed final exam successfully:")
//             console.log("He has scored "  + scores + " points he got diploma with degree " + degrees[1]);
//         }
//         if(scores >= passLimit[2] && scores < passLimit[1]){
//             console.log(students[i].name + " passed final exam successfully:")
//             console.log("He has scored "  + scores + " points he got diploma with degree " + degrees[2]);
//         }
//         if(scores >= passLimit[3] && scores < passLimit[2]){
//             console.log(students[i].name + " passed final exam successfully:")
//             console.log("He has scored "  + scores + " points he got diploma with degree " + degrees[3]);
//         }
//         if(scores >= passLimit[4] && scores < passLimit[3]){
//             console.log(students[i].name + " passed final exam successfully:")
//             console.log("He has scored "  + scores + " points he got diploma with degree " + degrees[4]);
//         }
//         if(scores < passLimit[4]){
//             console.log(students[i].name + " failed final exam:")
//             console.log("He has scored "  + scores + " points has failed and he has to try next year ");
//         }
//     }
// }

// var students = [
//     {
//         name: "John",
//         score1: 47,
//         score2: 46
//     },
//     {
//         name: "Bob",
//         score1: 23,
//         score2: 24
//     },
//     {
//         name: "Nick",
//         score1: 4,
//         score2: 35
//     },
//     {
//         name: "Alex",
//         score1: 44,
//         score2: 45
//     },
//     {
//         name: "Emma",
//         score1: 30,
//         score2: 45
//     },
// ];

