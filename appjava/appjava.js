'use strict';
var score=0;
let userName=prompt('Enter your name, Please');

function question1()
{
  console.log("Greeting, "+userName+" you are welcome, open the console pLease to answer the following questions!");
  
  let userVisit=prompt('Q1: Do you think that I love programming ?');
  console.log("Please answer with only (Y/YES)");
  
  userVisit=userVisit.toUpperCase();
  
  switch (userVisit) {
    case 'Y':
    case 'YES':
      {
        alert('Thanks for answering correctly');
        score++;
        break;
      }
    case 'N':
    case'NO':{
      alert("answer with only (Y/YES)"); 
            break;}
    default:{
      alert("answer with only (Y/YES)"); 
      break;}
      }
    
  }
question1();

function question2()
{let type = prompt('Q2: Do you know what i studied before ?');
console.log("Please answer with only (N/NO)");
type=type.toUpperCase();

switch (type) {
  case 'Y':
  case 'YES':{
    alert("answer with only (N/NO)"); 
    break;}
      
  case 'N':
  case'NO':
  {
    alert('Thanks for answering correctly');
    score++;

      break;
      
  }
  default:{
    alert("Please adhere to the answers found in the CONSOLE (N/NO)");
    break;}
    }
  }
  question2();


function question3()
{let branch=prompt('Q3: Do you think that i\'m in love with the HomeMade food ?');
branch=branch.toUpperCase();
console.log("Please answer with only (N/NO)");

switch (branch) {
  case 'Y':
  case 'YES':
    {
      alert("answer with only (N/NO)"); 

            break;
          }
    
  case 'N':
  case'NO':
  {
    alert('Thanks for answering correctly');
    score++;

        break;
    }
    
  default:
    {
      alert("Please adhere to the answers found in the CONSOLE (Y/YES)");
      break;
  }
    }
  }
  question3();




function question4()
{let feed=prompt('Q4: Do you know my Full Name ?');
console.log("Please answer with only (Y/YES)");
feed=feed.toUpperCase();

switch (feed) {
  case 'Y':
  case 'YES':
    {
     alert('Thanks for answering correctly');
     score++;

          break;
      }
      
  case 'N':
  case'NO':
  {
    alert("answer with only (Y/YES)"); 
    break;
        }
  default:
    {
      alert("Please adhere to the answers found in the CONSOLE (Y/YES)");
    break;
  }
}
}
question4();



function question5()
{
  let feedback=prompt('Q5: Do you think that i love swimming');
console.log("Please answer with only (N/NO)");
feedback=feedback.toUpperCase();


switch (feedback) {
  case 'Y':
  case 'YES':
    {
      alert("answer with only (N/NO)"); 
            break;}
          
      
  case 'N':
  case'NO':{
    alert('Thanks for answering correctly');
    score++;
        break;}
    
  
  default:
    {
      alert("Please adhere to the answers found in the CONSOLE (N/NO)");
      break;}
  
}
}
question5();



/////////////////////////////////
function question6()
{var flag=0;
  var guessNum=prompt('Q6: Guess a random number between 1-10');
  console.log("The number is 5");
  
  
  for (var x=1;x<=4 && flag == 0;x++){
    if (guessNum == 5)
      {
        alert('Thanks for answering correctly');
        flag=1;          
        score++;
      }
    else if (guessNum >= 0 && guessNum <5)
      {
        guessNum=prompt("Too low, Try again please. The number is 5");
      }
            
        
    else if (guessNum > 5 && guessNum <=10){
      guessNum=prompt("Too High, Try again please. The number is 5");
    }
      
    
    else
      {
        guessNum=prompt("Please adhere to the RANGE of numbers {1,2,3....10}. The number is 5");
      }
  }
  console.log("The number is 5 with "+x+" number of attempts");
  
  }
  question6();
  
/////////////////////////////////// if guess[1,5,10]

function question7()
{
  var count=0;
  
  console.log("The numbers you can choose are 1 OR 5 OR 10");
  var guess_2=[1,5,10];
  for (var j=0; j<6 && count == 0 ;j++)
  {
    var Guess=prompt('Q7: Guess a random number between 1-10');
    
    for (var x=0; x <= j; x++)    
      if ( Guess == guess_2[x])
      {
        alert('Congrats you got it right!');
        count=1;
        score++;
        break;          
      }
    
    if (count == 0)
      {
        alert('Sorry, wrong answer. The numbers you can choose are 1 OR 5 OR 10');
      }
    
  
  }
}
question7();



alert(' You got ' + score + ' correct answers!');
let TopTen=['1- The Godfather Part I. ','2- The Godfather Part II. ','3- Dog Day Afternoon. ','4- Serpico.  ','5- The Panic in Needle Park. ','6- Carlito’s Way.  ','7- The Irishman. ','8- Scarface. ','9- Glengarry Glen Ross.  ','10- Scarecrow.' ];
for (let x=0;x<TopTen.length;x++)
{
  document.write(TopTen[x]+"          ");  
}
alert('Thanks '+userName+' for visit us!, come again :)');
