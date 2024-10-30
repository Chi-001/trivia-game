let questions = ["The outer part of a bread is called?", "Which is the largest planet in the solar system?", "What is the name of the longest river?",
    "What is the nearest planet to the sun?", "What food never spoils?"];
let answers = ["Crust", "Jupiter", "Nile", "Mercury", "Honey"];
let score = 0;
let totalScore = 5;
 

function checkResponse(){
    for(i = 0; i < 5; i++){
        response = prompt(questions[i])

        if(response.length === 0){
            alert("Please Input Answer!")
            checkResponse()
        }

        else if(response.length > 0){
            if(response === answers[i]){
                score += 1
                alert("Correct!")
            }
            else{
                alert("Incorrect!")
            }
        }
    }
    alert("You have completed the test")
    alert("You scored" +score+ "/" + totalScore)
}
checkResponse();
