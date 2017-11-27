//each player will say a number starting from 1 to hundred when its their turn
//if player turn number is divisible by 7 reverse the player order
//if player turn is divisble by 11 skip next immidiate playerArray
//player who say 100 is the winner
//------------------------------------------------------------------------------


var playerArray=[ "player1", "player2", "player3", "player4", "player5" ];

var i=0;              //for looping
var countKeeper=0;    //keep count play turns and skips
var winner;           //name with count of 100
 
for(i=1; i<=200; i++){ //loop over array
 

 var players=playerArray[i%playerArray.length]; //game players
 
 
 var position=(i%playerArray.length);           //players positions in array 
  
 var counter=i;                                 // give it a nice name
  
// console.log(players+' '+position +" "+counter);
  

 if(counter%7===0){                           //check counter and do reverse array list order 
   
playerArray.reverse();

// console.log("arry reverse happened here "+players+" -----");
   
 }

 if(counter%11===0){                          //check counter and skip a turn
   
countKeeper=countKeeper-1
// console.log("skip happened here "+players+" -----");
   
 }

if(countKeeper===100){                        //if count has counted hundred turn, retuns winner end loop


winner=players;                               //our winner
break;                                        //end loop
  

}

countKeeper=countKeeper+1;                    //increment counter every turn

  
}

console.log("this is winner "+winner);        // this is the inner






