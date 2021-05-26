'use strict';
function question1()
{var score=0;
  let userName=prompt('Enter your name, Please');
  console.log("Greeting, "+userName+" you are welcome, open the console pLease to answer the following questions!");
  
  let userVisit=prompt('Do you think that I love programming ?');
  console.log("Please answer with only (Y/YES)");
  
  userVisit=userVisit.toUpperCase();
  
  switch (userVisit) {
    case 'Y':
    case 'YES':{
        alert('Thanks for answering correctly');
        score++;
        break;
      }
    case 'N':
    case'NO':{
      console.log("Please adhere to the answers found in the CONSOLE");
            break;}
    default:{
      console.log("Please adhere to the answers found in the CONSOLE (Y/YES)");
      break;}
      }
    
  }
question1();

//correctAnswer(userVisit);
/*
if (userVisit.toUpperCase() == 'Y' || userVisit.toUpperCase() == 'YES')
{

    alert("Thanks for answering");
}
else
{
        while (!(userVisit.toUpperCase() == 'Y' || userVisit.toUpperCase() == 'YES'))
        {
          alert("Please type your answer with ** (Y/YES)** options ONLY");
          userVisit=prompt('Do you think that I love programming ?');
        }
        alert("CONGRATS, Thanks for answering");
}
*/
function question2()
{let type = prompt('Do you know what i studied before ?');
console.log("Please answer with only (N/NO)");
type=type.toUpperCase();

switch (type) {
  case 'Y':
  case 'YES':{
    console.log("Please adhere to the answers found in the CONSOLE");
          break;}
      
  case 'N':
  case'NO':
  {
    alert('Thanks for answering correctly');
    score++;

      break;
      
  }
  default:{
    console.log("Please adhere to the answers found in the CONSOLE (N/NO)");
    break;}
    }
  }
  question2();

/*
//correctAnswer(type);
if (type.toUpperCase() == 'NO' || type.toUpperCase() == 'N' || type.toUpperCase() == 'YES' || type.toUpperCase() == 'NO')
{

    console.log("Thanks for answering");
    alert("Thanks for answering");
  
}
else
{
        while (!(type.toUpperCase() == 'Y' || type.toUpperCase() == 'N' || type.toUpperCase() == 'YES' || type.toUpperCase() == 'NO'))
        {
          alert("Please type your answer with ** (y/n) or (yes/no) ** options ONLY");
          type=prompt('Do you have a shop or personal used ?');
        }
        console.log("Thanks for answering");
        alert("CONGRATS, Thanks for answering");

}*/

function question3()
{let branch=prompt('Do you think that i\'m in love with the HomeMade food ?');
branch=branch.toUpperCase();
console.log("Please answer with only (N/NO)");

switch (branch) {
  case 'Y':
  case 'YES':
    {
      console.log("Please adhere to the answers found in the CONSOLE");
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
      console.log("Please adhere to the answers found in the CONSOLE (Y/YES)");
      break;
  }
    }
  }
  question3();
  

/*if (branch.toUpperCase() == 'Y' || branch.toUpperCase() == 'N' || branch.toUpperCase() == 'YES' || branch.toUpperCase() == 'NO')
{

    console.log("Thanks for answering");
    alert("Thanks for answering");
}
else
{
        while (!(branch.toUpperCase() == 'Y' || branch.toUpperCase() == 'N' || branch.toUpperCase() == 'YES' || branch.toUpperCase() == 'NO'))
        {
          alert("Please type your answer with ** (y/n) or (yes/no) ** options ONLY");
          branch=prompt('Do you have another branches ?');

        }
        console.log("Thanks for answering");
        alert("CONGRATS, Thanks for answering");
}*/

let feed=prompt('Do you know my Full Name ?');
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
    console.log("Please adhere to the answers found in the CONSOLE");
          break;
        }
  default:
    {
      console.log("Please adhere to the answers found in the CONSOLE (Y/YES)");
    break;
  }
}
//correctAnswer(feed);      

/*
if (feed.toUpperCase() == 'Y' || feed.toUpperCase() == 'N' || feed.toUpperCase() == 'YES' || feed.toUpperCase() == 'NO')
{

    console.log("Thanks for answering");
    alert("Thanks for answering");
}
else
{
        while (!(feed.toUpperCase() == 'Y' || feed.toUpperCase() == 'N' || feed.toUpperCase() == 'YES' || feed.toUpperCase() == 'NO'))
        {
          alert("Please type your answer with ** (y/n) or (yes/no) ** options ONLY");
          feed=prompt('Do you like the variants in our products ?');

        }
        console.log("Thanks for answering");
        alert("CONGRATS, Thanks for answering");
}
*/

let feedback=prompt('Do you think that i love swimming');
console.log("Please answer with only (N/NO)");
feedback=feedback.toUpperCase();


switch (feedback) {
  case 'Y':
  case 'YES':
    {
      console.log("Please adhere to the answers found in the CONSOLE");
            break;}
          
      
  case 'N':
  case'NO':{
    alert('Thanks for answering correctly');
    score++;
        break;}
    
  
  default:
    {
      console.log("Please adhere to the answers found in the CONSOLE (N/NO)");
      break;}
  
}
/////////////////////////////////
var flag=0;
var guessNum=prompt('Guess a random number between 1-10');
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
      guessNum=prompt("Too low, Try again please.");
    }
          
      
  else if (guessNum > 5 && guessNum <=10){
    guessNum=prompt("Too High, Try again please. ");
  }
    
  
  else
    {
      guessNum=prompt("Please adhere to the RANGE of numbers {1,2,3....10} ");
    }
}
console.log("The number is 5 with "+x+" number of attempts");


///////////////////////////////////

function question7()
{var flag2=0;
  var guessNum2=[1,2,3,4,5,6,7,8,9,10];
  
  console.log("The numbers you can choose are 1 OR 5 OR 10");
  
  for (var j=0; j<6 ;j++)
  {
    var Guess=prompt('Guess a random number between 1-10');
    
    for (var x=0; x<guessNum2.length; x++)
    {
      
      if ( Guess == 1 || Guess == 5 || Guess == 10)
      {
        alert('Congrats you got it right!');
        j=6;
        score++;
        break;          
      }
    }
       if (j !== 6)
      {
        alert('Sorry, wrong answer. try again');
      }
    
  
  }
}
question7();



console.log("you have tried "+x+" times");
alert(' You got ' + score + ' correct answers!');
let TopTen=['1- The Godfather Part I. ','2- The Godfather Part II. ','3- Dog Day Afternoon. ','4- Serpico.  ','5- The Panic in Needle Park. ','6- Carlito’s Way.  ','7- The Irishman. ','8- Scarface. ','9- Glengarry Glen Ross.  ','10- Scarecrow.' ];
for (let x=0;x<TopTen.length;x++)
{
  document.write(TopTen[x]+"          ");  
}
///////////////////////////
  //correctAnswer(feedback);
/*
if (feedback.toUpperCase() == 'Y' || feedback.toUpperCase() == 'N' || feedback.toUpperCase() == 'YES' || feedback.toUpperCase() == 'NO')
{

    console.log("Thanks for answering");
    alert("Thanks for answering");
}
else
{
        while (!(feedback.toUpperCase() == 'Y' || feedback.toUpperCase() == 'N' || feedback.toUpperCase() == 'YES' || feedback.toUpperCase() == 'NO'))
        {
          alert("Please type your answer with ** (y/n) or (yes/no) ** options ONLY");
          feedback=prompt('Do you like the variants in our products ?');

        }
        console.log("Thanks for answering");
        alert("CONGRATS, Thanks for answering");
}
*/



/*
function correctAnswer(UserAns)
{

  if (UserAns.toUpperCase() == 'Y' || UserAns.toUpperCase() == 'N')
      {
        console.log("Thanks for answer");
        count++;
      }
      else
      {
        alert("Please answer the following Questions **(Y/N)** ONLY");
        while (!(UserAns.toUpperCase() == 'Y' || UserAns.toUpperCase() == 'N')){      
  switch (count) {
        case 1:{
          UserAns=prompt('Is it the first time you visit us ?'); count++;
           break;}
    
        case 2:{
          UserAns = prompt('Do you have a shop or personal used ?'); count++;
           break;}
        case 3:{
          UserAns=prompt('Do you have another branches ?'); count++;
            break;}
        case 4:{
          UserAns=prompt('Do you like the variants in our products ?'); count++;
          break;}
        case 4:{
          UserAns=prompt('Do you have any comment to improve our business ?'); count++;
          break;}    
        default:{
          console.log("Thanks for answer");
            break;}
    }
  }}
}
 

function RateMe()
{
  /*
  let stars = prompt(userName+' Give us rating 1-5, please !');
  if (stars >= 5)
  stars = 5;

  let starResults='';

  for (let i = 0; i < stars; i++) 
  starResults += '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvvIxXy4-x8TSIlWn-znOZirHvrsErjpxQw&usqp=CAU" width="50px">';


let starResults=['The Godfather Part I','The Godfather Part II','Dog Day Afternoon','Serpico','The Panic in Needle Park','Carlito’s Way','The Irishman','Scarface','Glengarry Glen Ross','Scarecrow' ];

  return starResults;
}*/
