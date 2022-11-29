// Assignment Code
var generateBtn = document.querySelector("#generate");
// var Chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pwBox = document.querySelector("#generate");
var uCl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lCl = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var sCs = "!@#$%^&*_-+=";
var Chars = uCl + lCl + num + sCs;
var nadda = "No sir"

// var characterCount = "12";
var password = "";

// Write password to the #password input

/* :)  This section is allows prompts to be run when the generate password button is clicked, additionally it allows me to store the inputs of the prompts so that information can be 
    used to decide which criteria will be used when creating the password.*/
function writePassword(event) {
    event.preventDefault();
     var intro = ("You will now select which parameters your password should satisfy. Would you like to use Upper Case letters in your password, yes or no?") // 3
          var intro1 = ("Would you like to use Lower Case letters in your password, yes or no?");
     var intro2 = ("Would you like to use Numbers in your password, yes or no");
     var intro3 = ("Would you like to use Special Characters in your password, yes or no");
     var intro4 = ("How many characters would you like in your password, must between 8-128 characters");
     var upperCase = prompt (intro);
     var lowerCase = prompt (intro1);
     var numbs = prompt (intro2);
     var specialC = prompt (intro3);
     var characterCount = prompt (intro4);
    console.log(upperCase);
    console.log(lowerCase);
    console.log(numbs);
    console.log(specialC);
    console.log(characterCount);
var nc = "Parameters not met, please try again. Make sure to use yes or no for first 4 prompts, and a numberic value for the character number prompt";
/* This section is taking the information gathered via the prompts and using it to decide how long, for all, and what character types will be used 
when the passwords are created. I'm pretty sure there is a better way than a series of "if" statements to get this accomplished. That being said my goal was to
produce a minimum viable product to satisy the challenge and from there look for a better way to accomplish this. With many more variables or variables with more than 
2 choices if statements would quickly become unusable*/

if ( upperCase == "yes" && lowerCase == "yes" && numbs == "yes" && specialC == "yes") {

    for (var i = 0; i <= characterCount; i++){ 
        var randomNumber = Math.floor(Math.random() * Chars.length);
        password +=  Chars.substring(randomNumber, randomNumber +1);
        }  
   } if (upperCase == "yes" && lowerCase == "yes" && numbs == "yes" && specialC == "no") {
var Chars1 = uCl + lCl + num;
for (var i = 0; i <= characterCount; i++){ 
    var randomNumber = Math.floor(Math.random() * Chars1.length);
    password +=  Chars1.substring(randomNumber, randomNumber +1);
    }  
} if (upperCase == "yes" && lowerCase == "yes" && numbs == "no" && specialC == "no") {
    var Chars2 = uCl + lCl;
    for (var i = 0; i <= characterCount; i++){ 
    var randomNumber = Math.floor(Math.random() * Chars2.length);
    password +=  Chars2.substring(randomNumber, randomNumber +1);
        }  
} if (upperCase == "yes" && lowerCase == "no" && numbs == "no" && specialC == "no") {
    var Chars3 = uCl;
    for (var i = 0; i <= characterCount; i++){ 
    var randomNumber = Math.floor(Math.random() * Chars3.length);
    password +=  Chars3.substring(randomNumber, randomNumber +1);
    }  
} if (upperCase == "no" && lowerCase == "no" && numbs == "no" && specialC == "yes") {
    var Chars4 = sCs;
    for (var i = 0; i <= characterCount; i++){ 
    var randomNumber = Math.floor(Math.random() * Chars4.length);
    password +=  Chars4.substring(randomNumber, randomNumber +1);
    } 
} if (upperCase == "no" && lowerCase == "no" && numbs == "yes" && specialC == "yes") {
    var Chars5 = num + sCs;
    for (var i = 0; i <= characterCount; i++){ 
    var randomNumber = Math.floor(Math.random() * Chars5.length);
    password +=  Chars5.substring(randomNumber, randomNumber +1);
    }  
} if (upperCase == "no" && lowerCase == "yes" && numbs == "yes" && specialC == "yes") {
    var Chars6 = lCl + num + sCs;
    for (var i = 0; i <= characterCount; i++){ 
    var randomNumber = Math.floor(Math.random() * Chars6.length);
    password +=  Chars6.substring(randomNumber, randomNumber +1);
    }  
} if (upperCase == "no" && lowerCase == "no" && numbs == "yes" && specialC == "yes") {
    var Chars7 = num + sCs;
    for (var i = 0; i <= characterCount; i++){ 
    var randomNumber = Math.floor(Math.random() * Chars7.length);
    password +=  Chars7.substring(randomNumber, randomNumber +1);
    }  
} if (upperCase == "no" && lowerCase == "yes" && numbs == "yes" && specialC == "no") {
    var Chars8 = lCl + num;
    for (var i = 0; i <= characterCount; i++){ 
     var randomNumber = Math.floor(Math.random() * Chars8.length);
    password +=  Chars8.substring(randomNumber, randomNumber +1);
    }  
}if (upperCase == "no" && lowerCase == "yes" && numbs == "no" && specialC == "no") {
    var Chars9 = lCl;
    for (var i = 0; i <= characterCount; i++){ 
    var randomNumber = Math.floor(Math.random() * Chars9.length);
    password +=  Chars9.substring(randomNumber, randomNumber +1);
    }  
} if (upperCase == "no" && lowerCase == "yes" && numbs == "no" && specialC == "yes") {
    var Chars10= lCl + sCs;
    for (var i = 0; i <= characterCount; i++){ 
    var randomNumber = Math.floor(Math.random() * Chars10.length);
    password +=  Chars10.substring(randomNumber, randomNumber +1);
    }  
} if (upperCase == "yes" && lowerCase == "no" && numbs == "yes" && specialC == "no") {
    var Chars11 = uCl + num;
    for (var i = 0; i <= characterCount; i++){ 
    var randomNumber = Math.floor(Math.random() * Chars11.length);
    password +=  Chars11.substring(randomNumber, randomNumber +1);
    }  
} if (upperCase == "yes" && lowerCase == "no" && numbs == "no" && specialC == "yes") {
    var Chars12 = uCl + sCs;
    for (var i = 0; i <= characterCount; i++){ 
    var randomNumber = Math.floor(Math.random() * Chars12.length);
    password +=  Chars12.substring(randomNumber, randomNumber +1);
    }  
} if (upperCase == "yes" && lowerCase == "no" && numbs == "yes" && specialC == "yes") {
    var Chars13 = uCl + num + sCs;
    for (var i = 0; i <= characterCount; i++){ 
    var randomNumber = Math.floor(Math.random() * Chars13.length);
    password +=  Chars13.substring(randomNumber, randomNumber +1);
    }  
} if (upperCase == "no" && lowerCase == "no" && numbs == "yes" && specialC == "no") {
    var Chars14 = uCl + num + sCs;
    for (var i = 0; i <= characterCount; i++){ 
    var randomNumber = Math.floor(Math.random() * Chars14.length);
    password +=  Chars14.substring(randomNumber, randomNumber +1);
    }  
   } else { password += nc;}
     
   console.log(password);   
document.getElementById("password").value = password
}  



generate.addEventListener("click", writePassword);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

   
/* References: 
1. Foolish Developer, Shantanu Jana, "Random Password Generator with JavaScript", Foolishdeveloper.com. 
https://www.foolishdeveloper.com/2021/07/random-password-generator-javascript.html (11.28.22)
  
2. Foolish Developer, "Random Password Generator using JavaScript", dev.to. 
https://dev.to/code_mystery/random-password-generator-using-javascript-6a (11.28.22)

3. 

Code Producer's Last Name, Code Producer's First Name. "Sample computing source code for idea/pattern/code." 
Website Title. Web Address (retrieved Date Accessed).
*/
