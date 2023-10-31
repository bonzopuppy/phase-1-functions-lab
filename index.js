// Code your solution in this file!

//distanceFromHqInBlocks Take in a pickup location and return the number of blocks from 42nd street
 
function distanceFromHqInBlocks (pickupLocation) {
    const distance = Math.abs(pickupLocation-42);
    return distance;
}

//distanceFromHqInFeet translate the number of blocks in the first function to the distance in feet


function distanceFromHqInFeet (pickupLocation) {
    const feet = distanceFromHqInBlocks(pickupLocation) * 264;
    return feet;
}

//distanceTravelledInFeet multiply the first two functions

function distanceTravelledInFeet (startBlock, endBlock) {
    const steps = Math.abs(startBlock - endBlock) * 264;
    return steps;
}

/*it('gives customers a free sample', function() {
    expect(calculatesFarePrice(43, 44)).to.equal(0);

    it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
    // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
    expect(calculatesFarePrice(34, 32)).to.equal(2.56);



    it('charges 25 dollars for a distance over 2000 feet', function() {
    expect(calculatesFarePrice(50, 58)).to.equal(25);


    it('does not allow rides over 2500 feet', function() {
    expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
  */

function calculatesFarePrice(startBlock, endBlock) {
    const fareDistance = distanceTravelledInFeet(startBlock, endBlock);
    
    if (fareDistance <=400) { 
            return 0;
    } else if (fareDistance > 400 && fareDistance < 2000){
            return (fareDistance - 400) * .02;
    } else if (fareDistance > 2000 & fareDistance < 2500) {
            return 25;
    } else {
            return "cannot travel that far";
        } 
    }

    //figure out how many feet...calling previous function

    //establish a variable called price

    //if that distance is <400, then price = 0

    //if that distance is >400 && <2000, subtract 400 and multiply by .02 to get prices

    //if that distance is >2000, price is 25 dollars

    //if that distance is >2500, price is 0.