//---------SET VARIABLES(start)------------------    
    var analyze = document.getElementById("analyze");
    var charNum = document.getElementById("wordCount");
    var totalChars = document.getElementById("totalChars");
   
    //rExp variables//
    var initial_whitespace_rExp; //whitespace
    var left_trimmedStr;//trimming after whitespace
    var non_alphanumerics_rExp; //numbers and letters via rExp
    
    //string variables//
    var fullStr; //before
    var cleanedStr; //after
    var splitString; //counting
    
    // This application will calculate word and character counts//
    var word_count; // words
    var char_count; // characters

    
    //plurality variables for printing//
    var wordOrWords;
    var charOrChars;
    
    analyze.addEventListener("click", function() {
        CountWords(this.form.x, true, true)
    });
//-----SET VARIABLES(end) ------------------    
//
/*----FUNCTION(start)----------------------
     *This function will count the spaces and characters, respectively,
     *of the body of text entered in the text box (called textbox1 in HTML)
     *by counting converting the body of text into a string, and 
     *by doing so, this function will be counting the items – 
     *(alphanumeric characters) in a string. This is done so through utilizing
     *rExp, or regular expession in this JavaScript, as denoted below for each
     *of the actions that this application does: counting 1) words and 2) sentences.
 */

    function CountWords(this_field, show_word_count, show_char_count) {

//-----Character count(start)--------
        //set character values
        char_count = this_field.value.length; //measure all the characters presented in the body of text ("this") for the length//
        fullStr = this_field.value + " "; //take the entire body of text entered//
        initial_whitespace_rExp = /^[^A-Za-z0-9]+/gi; //identify the whitespace in the body of text//
        left_trimmedStr = fullStr.replace(initial_whitespace_rExp, ""); //eliminate whitespace//
       
        // character plurality
         if (char_count == 1) {
    
            }
            else {
                console.log(charOrChars = " characters");
            }
//------Character count(end)------------
//
//-----Word count(start)----------------
        //  @word counting//
        non_alphanumerics_rExp = /[^A-Za-z0-9]+/gi; //alphanumeric parameters via rExp//
        cleanedStr = left_trimmedStr.replace(non_alphanumerics_rExp, " "); //count the spaces between each word to count the "words"//
        splitString = cleanedStr.split(" "); //split by spacing//
        word_count = splitString.length - 1; //don't count the first space...//
        
        
        if (fullStr.length < 2) {
            console.log(word_count = 0);
        }
        
        // plurality
         if (word_count == 1) {
            console.log(wordOrWords = " word");
        }
        else {
            console.log(wordOrWords = " words");
        }
//-----Word count(end)---------------
//
//-----Printing out the results -----
        //printing out the pop up//
        if (show_word_count & show_char_count) {
            alert("Word Count:\n" + "    " + word_count + wordOrWords + 
                    "\n" + "    " + char_count + charOrChars);
        }
        
        else { //to print out the word and character counts

            if (show_word_count) { //words
                alert("Word Count:  " + word_count + wordOrWords);
            }
            
            else {

            if (show_char_count) { // characters
                alert("Character Count:  " + char_count + charOrChars);
                }

            }
        }
        return word_count;
    }

//-----Printing out results (end)----
//-----FUNCTION(end)-----------------


        