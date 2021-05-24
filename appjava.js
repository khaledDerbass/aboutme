"use strict"
let userName=prompt('Enter your name, pLease!');
        console.log("Greeting, "+userName+" you are welcome!");

alert("Please answer the following Questions (Y/N)");


let userVisit=prompt('Is it the first time you visit us ?');
correctAnswer(userVisit);


let type = prompt('Do you have a shop or personal used ?');
correctAnswer(type);


let branch=prompt('Do you have another branches ?');
correctAnswer(branch);

let feed=prompt('Do you like the variants in our products ?');
correctAnswer(feed);      

let feedback=prompt('Do you have any comment to improve our business ?');
correctAnswer(feedback);


document.write(RateMe());


function correctAnswer(UserAns)
{
  if (UserAns.toUpperCase == 'Y' || UserAns.toUpperCase == 'N')
      console.log("Thanks for answer");
      else
      {
        alert("Please answer the following Questions **(Y/N)** ONLY");
        while (!(UserAns.toUpperCase == 'Y' || UserAns.toUpperCase == 'N'))
        correctAnswer(UserAns)
      }
}
 

function RateMe()
{
  let stars = prompt(userName+' Give us rating 1-5, please !');
  if (stars >= 5)
  stars = 5;

  let starResults='';

  for (let i = 0; i < stars; i++) 
  starResults += '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvvIxXy4-x8TSIlWn-znOZirHvrsErjpxQw&usqp=CAU" width="50px">';

  return starResults;
}
