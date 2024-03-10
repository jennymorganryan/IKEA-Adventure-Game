//Group Project - Make or Break: The Ikea Adventure Game

// alert
alert("Welcome to the Ikea Adventure Game: Make or Break! Here you'll have the opportunity to adventure through the Ikea store with the partner of your choice. Navigate through ok (yes) or cancel (no) questions to see if your conversations about sofas trigger a nervous breakdown or end in blissful longterm love.")
let points = 1

// //prompt
let playerName = prompt("What is your name?", [])
alert(`Welcome ${playerName}!`)

let partnerName = prompt("What is your partner's name?", [])
alert(`You and ${partnerName} look so cute together... thank god you're not on those dating apps anymore...`)

alert(`You and ${partnerName} enter the sliding glass doors of IKEA. You've recently been thinking of moving in together and you're on a mission to look for some household items.`)

let childhoodToy = prompt("You pass by Smaland children's corner.The scene is vibrant with the sounds of happy children squealing and running around excitedly. Nearby, bins are full to the brim with various stuffed animals. You gently pick one up that reminds you of a childhood toy. What kind of stuffed animal is it?", [])

let nostalgia = confirm(`"Look ${partnerName} I found a ${childhoodToy}!" It's not what you came for but, it's hard to resist. You turn to ${partnerName} and ask with pleading eyes, "Should I get it just for fun?" Do they say ok?`)
  if (nostalgia) {
   points = points + 1
   alert(`${partnerName} laughs and nods their head. Though they briefly tease you about falling for Ikea's marketing schemes, ${partnerName} puts an arm around your shoulder and says, "Who knows ${playerName}, maybe we'll have someone to pass it on to someday! Now, let's get out of here before you decide you need a dip in the ball pit too."`)
 } else {
   alert(`${partnerName} makes a face and says, "Come on ${playerName}, are you really going to spend money on a stupid toy?" Let's just get out of here as fast possible. I can't stand being around all of these tiny brats.`)
 }
//part 2

alert(`You and ${partnerName} walk onward, following the yellow and blue arrow stickers on the floor. The smell of ground beef, lingonberry, and mashed potatoes starts to fill the air...`)

let hungerLevel = prompt(`...${partnerName} turns to you, looking a little tired already. "How hungry are you?" they ask. What do you say?`, [])
 alert(`"You're ${hungerLevel}!!" Says ${partnerName} with a hint of annoyance in their voice. "Wow ${playerName}..."`)

let offerThemFood = confirm(`${partnerName} rolls their eyes subtly, but you catch it. Do you decide to be the bigger person and offer to grab their lunch at the restaurant while they take a breather in the dining room?`)
  if (offerThemFood) {
    points = points + 1
    alert (`${partnerName} gives you a small smile and grabs a seat. You head over to the cafeteria line. The man plating up meatballs saw your kind gesture, and piles your plates high with extra helpings of everything. He slides a slice of chocolate cake onto your tray and says "On the house" as you pay.`)
  } else {
    alert(`${partnerName} and you get in line for food. As you approach the cash register, you find yourself distracted looking at the MALM dressers in the distance. In your distraction, you bump into the back of ${partnerName} and the tray with your lunches goes flying. Lingonberry jam and meatballs are strewn across the Ikea floor.`)
  }


//SWATI - Part 3 Knicknacks


// alert
alert(`It's Knicknacks time to help evaluate your relationship with ${partnerName}`) 

 let result1 = prompt(`For ${playerName} - How many knicknacks are enough...?`, [])

alert(`Time to shop for ${result1} knicknacks for your cart`)

 let result2 = prompt(`For ${partnerName} - How many knicknacks are enough...?`, [])

alert(`Time to shop for ${result2} knicknacks for your cart`)

function findresult(result1, result2){
  let total = Math.abs(result1 - result2);
  return total;
}

total = findresult(result1, result2);

//if the difference of the number of items is 3 or less then it is a positive reaction with 1 point - Otherwise is it a negative reaction wiht 0 points added

if (total <= 3) //positive reaction add 2 points
{
  points = points + 1;
}

// // confirm
let isShoppedOut = confirm("Have you shopped for enough knickknacks...?")
if(isShoppedOut) {
  alert('Ok time to grab your big furniture items & head to Checkout! ')
} else {
  let newPrompt = prompt('how many minutes do you want to keep shopping for...?', [])
  alert(`great, let's shop for ${newPrompt} minutes`)
}




//0-1 point scenerio
/* declared variables so my snippet of code runs
will delete after integration*/
//const points = 0
// const partnerName = "Bob"
// const playerName = "Jen"

alert("Time to checkout!");

   if (points <= 1){ 
    alert ("looks like your partner is upset");
//checkout?
  let checkoutTrueOrFalse= confirm("Do you still want to check out?");
//prompt... if Yes to Checking out
  if (checkoutTrueOrFalse){
  let cashOrCard = prompt (`Cashier\: \"Are you paying with cash or card?\""`, [])
//if paying with card   
  if(cashOrCard === `card` || cashOrCard === `Card` || cashOrCard === "card" ){
  alert("Cashier\: \"please insert your card\"");
  }
//if paying with cash
 else if (cashOrCard === `cash` || cashOrCard === `Cash` || cashOrCard === `CASH`){
alert ("Cashier\: \"great\! let me get your total\"")
 } else {alert (`Cashier: "I did not understand that," ${partnerName} remarks "You don't have to understand them, because I sure don't," ${partnerName} runs out of the store. Sorry, your partner and yourself did not make it through IKEA` )}
    //the total is...
    let pleaseConfirmTotal = confirm ("Your total is $800") 
  //if confirm payment 
    if (pleaseConfirmTotal) {
     alert ("you hear a collective gasp of people around you\"\"Cashier\: \"is that... your partner running?\" Sorry you guys didn\'t make it through IKEA" );
     } 
    //if did not confirm payment
else {
 alert (`You look at ${partnerName} and ask if they can pay this time and you can pay them back`);
 alert (`${partnerName}: "no way ${playerName}!!  After today?"`);
alert (`${partnerName}: "Best of luck, I am out of here ${playerName}" Sorry you guys didn't make it through IKEA`);
 }
//if no to checking out 
  } else { 
 alert (`you turn around to talk to ${partnerName}. They remark, "No ${playerName}, it's too late. I have decided I have had enough.", they hurridly walk out of the door as you feel glares at you and the atmosphere feels somber with silence. Sorry, you didnt make it through IKEA`)}

}
// 3-4 point scenerio

if (points >=2) {
alert (`Cashier\: \"Are you paying with cash or card?\"`);
  //intro dialogue with alert
alert (`${playerName}: "It will be with card", your partner looks at you and smirks. ${partnerName}: "I got it, no worries"`);
alert (`Cashier: "Your total is $800." ${partnerName} hands the cashier their card`);
  //confirm to receive help from the cashier
let needHelp = confirm ("Cashier\: \" okay, I put your receipt in the bag. Did you need any help getting this stuff in your car?\!\"")
//conditionals for confirm or not
if (needHelp){
   alert (`${partnerName} pipes in, no no, we are okay! Thank you.`)
    } else { alert (`Cashier\: \"No worries\!\"`)}
//prompt dream vacation 
  let dreamVacation = prompt(`Both you and your partner start walking towards the door with your cart. ${partnerName} looks at you and chimes, "I have a question for you... if you could go anywhere in the world where would you go?"`, [])
  //proposal
alert(`${partnerName} gets down on one knee and holds your hand, you hear gasping all around`)
  //get response from user from proposal, yes or no
let yesOrNo = confirm(`"${playerName}, not only do I want to travel the world and touch the soil of ${dreamVacation} with you, but I would be enchanted to spend the rest of my life with you," they pause with a big smile on their face, "what do you think?"`)
  //yes or no
  if(yesOrNo) {
   alert ("it seems like the whole IKEA store is celebrating with you, you hold your partner in an embrace. Congrats, you made it through IKEA!") 
  } else { alert("A silent collective gasp fills the air. Ope! That\'s awkward")}


}













