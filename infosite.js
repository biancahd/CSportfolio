//variable names and connecting HTML tagsto this JS code//
var seattle = document.getElementById("seattle");
var girlsemp = document.getElementById("girlsemp");
var interns = document.getElementById("interns");
var bonfire = document.getElementById("bonfire");
var info1 = document.getElementById("seattle-info");
var info2 = document.getElementById("girls-info");
var info3 = document.getElementById("interns-info");
var info4 = document.getElementById("bonfire-info");

//fun facts about each photo://

//seattle//
seattle.addEventListener("click", function(){
    info1.innerHTML ="Seattle in the Rain" ;
    info2.innerHTML = " - taken in Queen Anne";
    info3.innerHTML = " - FUN FACT: that's the Space Needle in the background";    
    info4.innerHTML = " - notes: it doesn't actually rain that much in Seattle... I think";
});
 
//girls at the EMP//                      
girlsemp.addEventListener("click", function(){
    info1.innerHTML ="Girls at the EMP" ;
    info2.innerHTML = " - EMP stands for Experience Music Project, a huge museum based off of Jimmy Hendricks." ;
    info3.innerHTML = " - FUN FACT: the shape of the museam from above is the shape of his guitar.";    
    info4.innerHTML = " - NOTES: taken in eighth grade with my friends";

});

//interns at the Gum Wall//
interns.addEventListener("click", function(){
    info1.innerHTML ="Interns " ;
    info2.innerHTML = " - The interns at the Seattle Gum Wall. EW." ;
    info3.innerHTML = " - FUN FACT: the gum wall is a 20 year old attraction in Seattle located in an alley next to Pikes Place Market.";    
    info4.innerHTML = " - NOTES: first intern outing with the Fred Hutch interns";

});

//bonfire at Golden Gardens//
bonfire.addEventListener("click", function(){
    info1.innerHTML ="Bonfire " ;
    info2.innerHTML = " - My Seattle friends." ;
    info3.innerHTML = " - FUN FACT: Seattle ocean waters are ice cold.";    
    info4.innerHTML = " - NOTES: first bonfire";

});