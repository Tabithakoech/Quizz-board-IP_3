function checkScore(){
    var marks=0;// declaration of a variable marks initialized to 0

    //creating variables for each of the question and assigns values to them
    var q1=document.quizz.question1.value;
    var q2=document.quizz.question2.value;
    var q3=document.quizz.question3.value;
    var q4=document.quizz.question4.value;
    var q5=document.quizz.question5.value;

    var yourScore=document.getElementById("yourScore");

    var quizz=document.getElementById("quizz");

    //checking for correct answers and incrementing the marks
    if (q1=="js"){
        marks+=20
    }
    if (q2=="int"){
        marks+=20
    }
    if (q3=="Both of the above"){
        marks+=20
    }
    if (q4=="length()"){
        marks+=20
    }
    if (q5=="push()"){
        marks+=20
    }

    quizz.style.display='none';


    if (marks>80){
        document.getElementById("yourScore").innerHTML="You scored" + " " + marks +"%" + "You have execellently passed congratulations";

    }
    else if (marks>=50 && marks<80){
        document.getElementById("yourScore").innerHTML="You scored" + " " + marks +"%" + "You have fairly passed ";
    
    }
    else{
        document.getElementById("yourScore").innerHTML="You scored" + " " + marks +"%" + "You have scored poorly.Retake test ";
    }
    
    
}