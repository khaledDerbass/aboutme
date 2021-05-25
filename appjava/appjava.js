'use strict';

let userName=prompt('Enter your name, pLease!');
        console.log("Greeting, "+userName+" you are welcome!");
let count=0;
alert("Please answer the following Questions (y/n) or (yes/no)");


let userVisit=prompt('Is it the first time you visit us ?');
//correctAnswer(userVisit);
if (userVisit.toUpperCase() == 'Y' || userVisit.toUpperCase() == 'N' || userVisit.toUpperCase() == 'YES' || userVisit.toUpperCase() == 'NO')
{

    console.log("Thanks for answering");
    alert("Thanks for answering");
  
}
else
{
        while (!(userVisit.toUpperCase() == 'Y' || userVisit.toUpperCase() == 'N' || userVisit.toUpperCase() == 'YES' || userVisit.toUpperCase() == 'NO'))
        {
          alert("Please type your answer with ** (y/n) or (yes/no) ** options ONLY");
          userVisit=prompt('Is it the first time you visit us ?');
        }
        console.log("Thanks for answering");
        alert("CONGRATS, Thanks for answering");
}
let type = prompt('Do you have a shop or personal used ?');
//correctAnswer(type);
if (type.toUpperCase() == 'Y' || type.toUpperCase() == 'N' || type.toUpperCase() == 'YES' || type.toUpperCase() == 'NO')
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

}

let branch=prompt('Do you have another branches ?');
if (branch.toUpperCase() == 'Y' || branch.toUpperCase() == 'N' || branch.toUpperCase() == 'YES' || branch.toUpperCase() == 'NO')
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
}

let feed=prompt('Do you like the variants in our products ?');
//correctAnswer(feed);      
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


let feedback=prompt('Do you have any comment to improve our business ?');
//correctAnswer(feedback);
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



document.write(RateMe());

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
 */
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
