// Write your code in this file!
function scuberGreetingForFeet(distanceFeet) {
  let driverMessage
  if (distanceFeet <= 400) {
    driverMessage = "This one is on me!"
  }

    else if (distanceFeet >= 2000 && distanceFeet < 2500) {
      driverMessage = "I will gladly take your thirty bucks."
    }

      else
      driverMessage = "No can do."

    return driverMessage;
}
