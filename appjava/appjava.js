'use strict';


function question1()
{
  let marks=0;
  let userName=prompt('Enter your name, Please');
  console.log("Greeting, "+userName+" you are welcome, open the console pLease to answer the following questions!");
  
  let userVisit=prompt('Do you think that I love programming ?');
  console.log("Please answer with only (Y/YES)");
  
  userVisit=userVisit.toUpperCase();
  
  switch (userVisit) {
    case 'Y':
    case 'YES':{
        alert('Thanks for answering correctly');
        marks++;
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
    marks++;

      break;
      
  }
  default:{
    console.log("Please adhere to the answers found in the CONSOLE (N/NO)");
    break;}
    }
  }
  question2();


function question3()
{
  let branch=prompt('Do you think that i\'m in love with the HomeMade food ?');
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
    marks++;

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




function question4()
{let feed=prompt('Do you know my Full Name ?');
console.log("Please answer with only (Y/YES)");
feed=feed.toUpperCase();

switch (feed) {
  case 'Y':
  case 'YES':
    {
     alert('Thanks for answering correctly');
     marks++;

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
}
question4();


function question5()
{
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
    marks++;
        break;}
    
  
  default:
    {
      console.log("Please adhere to the answers found in the CONSOLE (N/NO)");
      break;}
    }  

}
question5();

function seriesTop (){
  let TopTen=['1- The Godfather Part I. ','2- The Godfather Part II. ','3- Dog Day Afternoon. ','4- Serpico.  ','5- The Panic in Needle Park. ','6- Carlito’s Way.  ','7- The Irishman. ','8- Scarface. ','9- Glengarry Glen Ross.  ','10- Scarecrow.' ];
  for (let x=0;x<TopTen.length;x++)
     document.write(TopTen[x]+"          ");  
  }
seriesTop ();  
function question6()
{
  let flag=0;
  let guessNum=prompt('Q6: Guess a random number between 1-10');
  console.log("The number is 5");
  
  
  for (let x=1;x<=4 && flag == 0;x++)
  {
    if (guessNum == 5)
      {
        alert('Thanks for answering correctly');
        flag=1;          
        marks++;
      }
    else if (guessNum >= 0 && guessNum <5)
        guessNum=prompt("Too low, Try again please.");
      
            
        
    else if (guessNum > 5 && guessNum <=10)
      guessNum=prompt("Too High, Try again please. ");
    
      
    
    else
        guessNum=prompt("Please adhere to the RANGE of numbers {1,2,3....10} ");
      
  }
  console.log("The number is 5 with "+x+" number of attempts");
  
}
question6();

question7 ();
 
function question7 ()
{
  let flag2=0;
  let guessNum2=[1,2,3,4,5,6,7,8,9,10];
  
  console.log("The numbers you can choose are 1 OR 5 OR 10");
  
  for (let j=0; j<guessNum2.length ;j++)
  {
    let Guess=prompt('Q7 : Guess a random number between 1-10');
    
    for (let x=0; x<guessNum2.length; x++)
    {
      //if (Guess == guessNum2[x]) 
      if ( Guess == 1 || Guess == 5 || Guess == 10)
      {
        alert('Congrats you got it right!');
        flag2=1;
        marks++;
        break;          
      }
    }
       if (flag2 != 1)
      {
        alert('Sorry, wrong answer. try again');
      }
    
  
  }
 
}





alert(' You got ' + marks + ' correct answers!');

//  let guess_Num2 = ['shirt', 'jeans', 'jacket', 'cap', 'short', 't-shirt','hoodie'];
  //  console.log("The items you can choose are Jeans OR Shirt OR hoodie");
   


/*
function RateMe()
{
  
  let stars = prompt(userName+' Give us rating 1-5, please !');
  if (stars >= 5)
  stars = 5;

  let starResults='';

  for (let i = 0; i < stars; i++) 
  starResults += '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvvIxXy4-x8TSIlWn-znOZirHvrsErjpxQw&usqp=CAU" width="50px">';


let starResults=['The Godfather Part I','The Godfather Part II','Dog Day Afternoon','Serpico','The Panic in Needle Park','Carlito’s Way','The Irishman','Scarface','Glengarry Glen Ross','Scarecrow' ];

  return starResults;
}*/

 



  
  
 
