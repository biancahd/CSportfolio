var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");


item1.addEventListener("click", function(){
    info1.innerHTML ="Seattle in the Rain" ;
    info2.innerHTML = " - taken in Queen Anne";
    info3.innerHTML = " - Space Needle: yes, in the background";    
    info4.innerHTML = " - notes: it doesn't actually rain that much in Seattle... I think";


});
                       
item2.addEventListener("click", function(){
    info1.innerHTML ="Girls at the EMP" ;
    info2.innerHTML = " - EMP stands for Experience Music Project, a huge museum based off of Jimmy Hendricks." ;
    info3.innerHTML = " - Fun fact: the shape of the museam from above is the shape of his guitar.";    
    info4.innerHTML = " - notes: taken in eighth grade with my friends";

});

item3.addEventListener("click", function(){
    info1.innerHTML ="Interns " ;
    info2.innerHTML = " - The interns at the Seattle Gum Wall. EW." ;
    info3.innerHTML = " - Fun fact: the gum wall is a 20 year old attraction in Seattle located in an alley next to Pikes Place Market.";    
    info4.innerHTML = " - notes: first intern outing with the Fred Hutch interns";

});

item4.addEventListener("click", function(){
    info1.innerHTML ="Bonfire " ;
    info2.innerHTML = " - My Seattle friends." ;
    info3.innerHTML = " - Fun fact: Seattle ocean waters are ice cold.";    
    info4.innerHTML = " - notes: first bonfire";

});